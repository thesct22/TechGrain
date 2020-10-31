
export function simplex(M){
    var i=0,j=0,k=0,pivot_column=0,pivot_row=0,temp=0,pos=0,count=0,flag=0;
    var m= 6;
    var n= 15;
    k = 0;
    for(i = 0; i <= m; i++)
    {
        M[i][n + k] = 1;
        M[m][i] *= -1;
        k++;
    }
    do
    {
        pivot_column=0;
        for(i = 0; i < n; i++)
        {
            if(M[m][i] < M[m][pivot_column])
            pivot_column=i;
        }
        pivot_row=0;
        for(i = 0; i < m; i++)
        {
            if((M[i][m + n + 1]/M[i][pivot_column])<(M[pivot_row][m + n + 1]/M[pivot_row][pivot_column]))
            pivot_row = i;
        }
        if(M[pivot_row][pivot_column] !== 1 && M[pivot_row][pivot_column] !== -1)
        {
            temp = M[pivot_row][pivot_column];
            for(i = 0; i <= (m + n + 1); i++)
            {
                M[pivot_row][i] /= temp;
            }
            for(i = 0; i <= m; i++)
            {
                temp = M[i][pivot_column];
                if(i===pivot_row)
                continue;
                for(j = 0;j <=m + n + 1;j++)
                {
                    M[i][j] -= (temp*M[pivot_row][j]);
                }
            }	
        }
        k=0;
        for(i=0; i < n; i++)
        {
            if( M[m][i] >= 0)
            k++;
        }
    }
    while(k < n);
    var retarry=[];
    retarry.push(M[m][m+n+1]);
    for(i = 0; i < n; i++)
    {
      	count = 0;
      	flag = 0;
      	for(j = 0; j <= m; j++)
      	{
      		if(M[j][i] === 1)
      		{
      			count += 1;
      			pos = j;
      		}
      		else if(M[j][i] !== 0)
      		{
      			flag = 1;
      			//console.log(M[j][i]);
      			break;
      		}
      	}
      	if(count === 1 && flag === 0)
            retarry.push(M[pos][m + n + 1]);//x[i]
   	}
    return(retarry);
}
