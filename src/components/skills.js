import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h5 style={{
                        margin: "auto"
                    }}>{this.props.namaskill}</h5>
                </Cell>
                
                <Cell col={10}>
            
                    <div style={{
                        display: "flex"
                    }}>
                        <ProgressBar
                            style={{
                            margin: "auto",
                            width:"75%"
                            
                        }}
                            progress={this.props.progress}/>
                    </div>
                </Cell>
                
            </Grid>
        )
    }
}
export default Skills;