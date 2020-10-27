import React, {Component} from 'react';
import Select from 'react-select';
import {groupedOptions} from './crops.js';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            area: "",
            watersupply: "",
            fertilizers: "",
            cropselect:[],
            indcrop:[],
            error: "",
            open: false
        };
    }
    
    handleChange = name => event => {
        this.setState({ error: "" });
        if(name==="cropselect")
            this.setState({ [name]: event});
        else if (name==="yield"){
            if (event.target.yield!=null)
                this.setState(prevState=>
                    ({indcrop:
                        [...prevState.indcrop,
                            {cropval:event.target.cropval,
                            yield:event.target.value}
                        ]
                    })
                );
            else if (event.target.place!=null)
                this.setState(prevState=>
                    ({indcrop:
                        [...prevState.indcrop,
                            {cropval:event.target.cropval,
                            yield:event.target.value}
                        ]
                    })
                );
            else if (event.target.price!=null)
                this.setState(prevState=>
                    ({indcrop:
                        [...prevState.indcrop,
                            {cropval:event.target.cropval,
                            yield:event.target.value}
                        ]
                    })
                );
        }
        else
            this.setState({ [name]: event.target.value});
    };

    clickSubmit = event => {
        event.preventDefault();
        const { area, email, password } = this.state;
        const user = {
            area,
            email,
            password
        };
        // console.log(user);
        
    };
    
    mainform = (area, email, password) => (
        <form>
            <div className="form-group">
                <label className="text-muted">What is the total cultivable area?</label>
                <input
                    onChange={this.handleChange("area")}
                    type="text"
                    className="form-control"
                    value={area}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Do you have a continuous supply of water for irrigation?</label>
                <div className="radio">
                    <input type="radio" id="Yes" className="form-control" name="water-supply" value="Yes" onChange={this.handleChange("watersupply")}/>
                    <label htmlFor="Yes">Yes</label>
                </div>
                <div className="radio">
                    <input type="radio" id="No" className="form-control" name="water-supply" value="No" onChange={this.handleChange("watersupply")}/>
                    <label htmlFor="No">No</label>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted">What kind of fertilizers do you use?</label>
                <div className="radio">
                    <input type="radio" id="Organic" className="form-control" name="fertilizers" value="Organic" onChange={this.handleChange("fertilizers")}/>
                    <label htmlFor="Organic">Organic</label>
                </div>
                <div className="radio">
                    <input type="radio" id="Inorganic" className="form-control" name="fertilizers" value="Inorganic" onChange={this.handleChange("fertilizers")}/>
                    <label htmlFor="No">No</label>
                </div>
            </div>
            
            
            <div className="form-group">
                <label className="text-muted">What crops have you grown in the past?</label>
                <Select
                    isMulti
                    name="crops"
                    options={groupedOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChange("cropselect")}
                />
            </div>
            
            <div>   
            {
                this.state.cropselect === null ? "" : this.state.cropselect.map((v,index) =>
                    <div className="container"> 
                        <h2 className="mt-5 mb-5">{v.label}</h2>
                        <div>
                            <label className="text-muted">What is the approximate yield for {v.cropname}?</label>
                            <input
                                    onChange={this.handleChange("yield")}
                                    type="num"
                                    className="form-control"
                                    cropname={v.label}
                            />
                        </div>
                        <div>
                            <label className="text-muted">Where have you sold {v.cropname}?</label>
                            <input
                                    onChange={this.handleChange("place")}
                                    type="text"
                                    className="form-control"
                                    cropname={v.label}
                            />
                        </div>
                        <div>
                            <label className="text-muted">At what price?</label>
                            <input
                                    onChange={this.handleChange("price")}
                                    type="text"
                                    className="form-control"
                                    cropname={v.label}
                            />   
                        </div>
                    </div>
                )
            }
                <h4>{this.state.cropselect === null ? "0" :this.state.cropselect.length}</h4>
            </div>
            <button
                onClick={this.clickSubmit}
                className="btn btn-raised btn-primary"
            >
                Submit
            </button>
        </form>
    );

    render() {
        const { area, email, password, error} = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Crop Details</h2>

                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                {this.mainform(area, email, password)}
            </div>
        );
    }
}

export default Form;