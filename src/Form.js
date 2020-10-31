import React, {Component} from 'react';
import Select from 'react-select';
import {groupedOptions,cropweight} from './crops.js';
import "./_custom-variables.scss";
import {simplex} from "./simplex";
class Form extends Component{
    constructor(){
        super();
        this.state = {
            area: "",
            invest:{
                seeds:"",
                manure:"",
                labour:"",
                mach:"",
                misc:""
            },
            watersupply: "",
            fertilizers: "",
            pests:"",
            labour:"",
            card:"",
            cropselect:[],
            indcrop:{},
            error: "",
            answer:""
        };
    }
    
    handleinvest = (b) => event => {
        var newState=this.state;
        this.setState({ error: "" });
        console.log(event);
        newState.invest[b]=event.target.value;
        this.setState(newState);
    };
    
    handleChange = name => event => {
        this.setState({ error: "" });
        console.log(event);
        if(name==="cropselect"){
            this.setState({ [name]: event});
        }
        else
            this.setState({ [name]: event.target.value});
    };
    
    handlecrops=(name, value)=>event=>{
        var newState=this.state;
        this.setState({ error: "" });
        if(!newState.indcrop[value]){
            newState.indcrop[value]={"yield":"0","place":"","price":"0"};
        }
        newState.indcrop[value][name]=event.target.value;
        this.setState(newState);
        
    }
    
    clickSubmit = event => {
        event.preventDefault();
        console.log("h0");
        var vals=this.state.invest;
        var cw=cropweight;
        console.log(cw);
        console.log("h1");
        console.log(cropweight);
        cw[0][22]=this.state.area;
        cw[1][22]=vals.seeds;
        cw[2][22]=vals.labour;
        cw[3][22]=vals.mach;
        cw[4][22]=vals.manure;
        cw[5][22]=vals.misc;
        console.log("h2");
        console.log(cw);
        var ans=simplex(cw);
        console.log(cw);
        console.log(ans);
        console.log("h3");
        this.setState({answer:ans});
        
    };
    clickreset=event=>{
        this.setState({
            area: "",
            invest:{
                seeds:"",
                manure:"",
                labour:"",
                mach:"",
                misc:""
            },
            watersupply: "",
            fertilizers: "",
            pests:"",
            labour:"",
            card:"",
            cropselect:[],
            indcrop:{},
            error: "",
            answer:""
        });
    }
    
    
    mainform = (area, invest) => (
        <div className="card">
        <h2 className="mt-5 ml-5 purple-text">Crop Details</h2>
        <form className="text-left border border-light p-5">
            <div className="md-form row">
                <div className="col-7">
                <div className="col">
                    <label>The total cultivable area in acres:</label>
                </div>
                <br/>
                <div className="col">
                    <label>ఎకరాలలో మొత్తం సాగు విస్తీర్ణం</label>
                </div>
                </div>
                <div className="col-3">
                    <input
                        onChange={this.handleChange("area")}
                        type="number"
                        id="areatext"
                        className="form-control"
                        value={area}
                    />
                </div>
            </div>
            
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>Do you have a adequate supply of water for irrigation?:</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>నీటిపారుదల కోసం మీకు తగినంత నీటి సరఫరా ఉందా?</label>
                    </div>
                </div>
                <div className="col-3 row">
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="Yes" className="custom-control-input" name="water-supply" value="Yes" onChange={this.handleChange("watersupply")}/>
                        <label htmlFor="Yes" className="custom-control-label pl-2">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="No" className="custom-control-input" name="water-supply" value="No" onChange={this.handleChange("watersupply")}/>
                        <label htmlFor="No" className="custom-control-label pl-2">No</label>
                    </div>
                </div>
            </div>
            
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>What kind of fertilizers do you use?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>మీరు ఎలాంటి ఎరువులు ఉపయోగిస్తున్నారు?</label>
                    </div>
                </div>
                <div className="col-3 row">
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="Organic" className="custom-control-input" name="fertilizers" value="Organic" onChange={this.handleChange("fertilizers")}/>
                        <label htmlFor="Organic" className="custom-control-label pl-2">Organic సేంద్రీయ</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="Inorganic" className="custom-control-input" name="fertilizers" value="Inorganic" onChange={this.handleChange("fertilizers")}/>
                        <label htmlFor="Inorganic"className="custom-control-label pl-2">Inorganic అకర్బన</label>
                    </div>
                </div>
            </div>
            
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>Did you face pest problems in the past?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>మీరు గతంలో తెగులు సమస్యలను ఎదుర్కొన్నారా?</label>
                    </div>
                </div>
                <div className="col-3 row">
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="pest-yes" className="custom-control-input" name="pests" value="Yes" onChange={this.handleChange("pests")}/>
                        <label htmlFor="pest-yes"className="custom-control-label pl-2">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="pest-no" className="custom-control-input" name="pests" value="No" onChange={this.handleChange("pests")}/>
                        <label htmlFor="pest-no"className="custom-control-label pl-2">No</label>
                    </div>
                </div>
            </div>
            
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>Did you face shortage of labour?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>మీరు శ్రమ కొరతను ఎదుర్కొన్నారా?</label>
                    </div>
                </div>
                <div className="col-3 row">
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="labour-yes" className="custom-control-input" name="labour" value="Yes" onChange={this.handleChange("labour")}/>
                        <label htmlFor="labour-yes"className="custom-control-label pl-2">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="labour-no" className="custom-control-input" name="labour" value="No" onChange={this.handleChange("labour")}/>
                        <label htmlFor="labour-no"className="custom-control-label pl-2">No</label>
                    </div>
                </div>
            </div>
            
            
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>How much money can you invest on seeds?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>మీరు విత్తనాలపై ఎంత డబ్బు పెట్టుబడి పెట్టవచ్చు?</label>
                    </div>
                </div>
                <div className="col-3">
                    <input
                        onChange={this.handleinvest("seeds")}
                        type="number"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>How much money can you invest on labour?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>మీరు కార్మికుల కోసం ఎంత డబ్బు పెట్టుబడి పెట్టవచ్చు?</label>
                    </div>
                </div>
                <div className="col-3">
                    <input
                        onChange={this.handleinvest("labour")}
                        type="number"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>How much money can you invest on machinery?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>యంత్రాల కోసం మీరు ఎంత డబ్బు పెట్టుబడి పెట్టవచ్చు?</label>
                    </div>
                </div>
                <div className="col-3">
                    <input
                        onChange={this.handleinvest("mach")}
                        type="number"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>How much money can you invest on fertilizers?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>ఎరువుల కోసం మీరు ఎంత డబ్బు పెట్టుబడి పెట్టవచ్చు?</label>
                    </div>
                </div>
                <div className="col-3">
                    <input
                        onChange={this.handleinvest("manure")}
                        type="number"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="md-form row p-3">
                <div className="col-7">
                    <div className="col">
                        <label>How much money can you invest on miscellaneous costs?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>ఇతర ఖర్చులపై మీరు ఎంత డబ్బు పెట్టుబడి పెట్టవచ్చు?</label>
                    </div>
                </div>
                <div className="col-3">
                    <input
                        onChange={this.handleinvest("misc")}
                        type="number"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="md-form p-3 row">
                <div className="col-7">
                    <div className="col">
                        <label>Do you have a Soil Health Card?</label>
                    </div>
                    <br/>
                    <div className="col">
                        <label>మీకు భూ ఆరోగ్య పత్రము ఉందా?</label>
                    </div>
                </div>
                <div className="col-3 row">
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="card-yes" className="custom-control-input" name="card" value="Yes" onChange={this.handleChange("card")}/>
                        <label htmlFor="card-yes" className="custom-control-label pl-2">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 col">
                        <input type="radio" id="card-no" className="custom-control-input" name="card" value="No" onChange={this.handleChange("card")}/>
                        <label htmlFor="card-no"className="custom-control-label pl-2">No</label>
                    </div>
                </div>
            </div>
            
            
            <div className="form-group p-3">
                <label className="text-muted">What crops have you grown in the past?</label>
                <br/>
                <label className="text-muted">మీరు గతంలో ఏ పంటలు పండించారు?</label>
                <Select
                    isMulti
                    name="crops"
                    options={groupedOptions}
                    className="basic-multi-select purple-text"
                    classNamePrefix="select"
                    onChange={this.handleChange("cropselect")}
                />
            </div>
            
            
            <div>   
            {
                this.state.cropselect === null ? "" : this.state.cropselect.map((v,index) =>
                    
                    <div key={index}> 
                        <h4 className="mt-5 mb-5 green-text">{v.label}</h4>
                        
                        <div className="md-form p-3 row">
                            <div className="col-7">
                                <label className="text-muted">What is the approximate yield for {v.label}?</label>
                            </div>
                            <div className="col-3">
                                <input
                                        onChange={this.handlecrops("yield",v.value)}
                                        type="number"
                                        className="form-control"
                                        cropname={v.label}
                                />
                            </div>
                        </div>
                        
                        <div className="md-form p-3 row">
                            <div className="col-7">
                                <label className="text-muted">Where have you sold {v.label}?</label>
                            </div>
                            <div className="col-3">
                                <input
                                        onChange={this.handlecrops("place",v.value)}
                                        type="text"
                                        className="form-control"
                                        cropname={v.label}
                                />
                            </div>
                        </div>
                        
                        <div className="md-form p-3 row">
                            <div className="col-7">
                                <label className="text-muted">At what price?</label>
                            </div>
                            <div className="col-3">
                                <input
                                        onChange={this.handlecrops("price",v.value)}
                                        type="number"
                                        className="form-control"
                                        cropname={v.label}
                                />   
                            </div>
                        </div>
                    </div> 
                )
            }
            </div>
        </form>
        <div className="text-center">
                <button
                    onClick={this.clickSubmit}
                    className="btn btn-raised btn-success"
                >
                    Submit
                </button>
                <button
                    onClick={this.clickreset}
                    className="btn btn-raised btn-danger"
                >
                    Reset
                </button>
        </div>
        </div>
    );

    render() {
        const { area, invest, error,answer} = this.state;
        return (
            <div className="container p-5">
                

                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                {this.mainform(area, invest)}
                <div
                    className="alert alert-primary"
                    style={{ display: answer ? "" : "none" }}
                >
                    <h4>Area of Crop 1: {this.state.answer[1]}</h4>
                    <h4>Area of Crop 2: {this.state.answer[2]}</h4>
                    <h4>Area of Crop 3: {this.state.answer[3]}</h4>
                    <h4>Area of Crop 4: {this.state.answer[4]}</h4>
                    <h4>Area of Crop 5: {this.state.answer[5]}</h4>
                    <h4>Area of Crop 6: {this.state.answer[6]}</h4>
                    
                    
                </div>
            </div>
        );
    }
}

export default Form;