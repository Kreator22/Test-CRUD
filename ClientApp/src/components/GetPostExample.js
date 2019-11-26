import React, { Component } from 'react';

export class GetPostExample extends Component {
    static displayName = GetPostExample.name;

    componentDidMount() {
        this.ReadData();
    }

    constructor(props) {
        super(props);
        this.state = {
            ReceivedValue: 0,
            ReceivedNestedValue: 0,
            ValueForPost: 0,
            NestedValueForPost: 0,
            loading: true,
            tmp: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async ReadData() {
        const response = await fetch('api/GetPostExample/GetData');
        const data = await response.json();
        console.log(data);
        this.setState({ ReceivedValue: data.value, ReceivedNestedValue: data.nestedData.nestedValue });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.postData(this.state);
    }

    handleValueChange = (e) => 
        this.setState({ ValueForPost: e.target.value });
    
    handleNestedValueChange = (e) =>
        this.setState({ NestedValueForPost: e.target.value});

     async postData(state) {
        const Data = {
            ID: 1,
            Value: Number(state.ValueForPost),
            NestedData: {
                ID: 1,
                NestedValue: Number(state.NestedValueForPost)
            }
        }

         const jsonData = JSON.stringify(Data);
        
         const response = await fetch('api/GetPostExample/PostData', {
             method: 'POST',
             mode: 'cors',
             headers: { 'Content-Type': 'application/json' },
             body: jsonData
         });
         const myData = await response.json();
         //console.log(myData);
         this.setState({ ReceivedValue: myData.value, ReceivedNestedValue: myData.nestedData.nestedValue });
    }
    
    render() {
        if (this.state.ReceivedValue && this.state.ReceivedNestedValue);
        return (
            <div>
                <form name="get-post-example-form" className="form-horizontal" onSubmit={this.handleSubmit}>

                    <div id="get-post-value-example">
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="get-post-value">Data.Value:</label>
                            <div className="col-sm-6">
                                <input type="number"
                                    id="get-post-value"
                                    className="form-control"
                                    value={this.state.ValueForPost}
                                    onChange={this.handleValueChange} />
                            </div>
                        </div>
                    </div>

                    <div id="get-post-nested-value-example">
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="get-post-nested-value">
                                Data.NestedData.NestedValue:
                            </label>
                            <div className="col-sm-6">
                                <input type="number"
                                    id="get-post-nested-value"
                                    className="form-control"
                                    value={this.state.NestedValueForPost}
                                    onChange={this.handleNestedValueChange}/>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                id="post-submit"
                                className="btn-default btn"
                                class="btn btn-primary"
                                >
                                Post
                                </button>
                        </div>
                    </div>

                </form>
                <p></p>
                <div className="form-group">
                    <h5 className="col-sm-4">Get:</h5>
                    <div className="col-sm-4">Data.Value = {this.state.ReceivedValue}</div>
                    <div className="col-sm-4">Data.NestedData.NestedValue = {this.state.ReceivedNestedValue}</div>
                </div>
            </div>
        );
    }
}

//{this.state.users.map(user => <UserRow key={user.id} user={user} />)}