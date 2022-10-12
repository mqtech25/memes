

import React from "react";

export default function MainContent() {
    return(
        <div className="App-content container mt-5">
           <form>
           <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Title"></input>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Title"></input>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                   <button type="submit" className="btn btn-primary">Get a New Meme Image</button>
                </div>
            </div>
           </form>
        </div>
    );
} 