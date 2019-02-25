import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0
                        , countM: 0
                        , countH: 0
                     }
    }
    render() { 
        const {count} =this.state
        const {countM} =this.state
        const {countH} =this.state
        return (  
            <div>
                <h1 style={{textAlign:"center"}} >{String(countH).padStart(2,'0')} : {String(countM).padStart(2,'0')} : {String(count).padStart(2,'0')} </h1>
                <p style={{textAlign:"center" }} > Hours / Minutes     /     Seconds </p>
                <input  style={{marginLeft:"45%" }} 
        type ="button"
        value="Start"
        onClick={() => {
          this.start()
        } } />
        <input  style={{marginLeft:"3%" }} 
        type ="button"
        value="Reset"
        onClick = {this._refreshPage}
        />
            </div>
        )
    }
//set interval 
//clear interval 
componentDidMount (){
    const {startCount}=this.props
        this.setState({
            count: startCount,
            countM: startCount,
            countH: startCount
        })
      
}
start = () => {
    this.doIntervalChange()
    this.doIntervalChange1()
    this.doIntervalChange2()}
_refreshPage() {
   
        window.location.reload();
      }
doIntervalChange = () => {
    this.myInterval = setInterval(()=>{
        this.setState(prevState => ({
            count : (prevState.count -1 *-1) %60
          }))
       }, 1000)
     }

    doIntervalChange1 = () => {
        this.myInterval = setInterval(()=>{
            this.setState(prevState => ({
                countM :( prevState.countM -1 *-1 )%60
            }))
        }, 1000*60)
    }
    doIntervalChange2 = () => {
        this.myInterval = setInterval(()=>{
            this.setState(prevState => ({
                countH : prevState.countH -1 *-1 
            }))
        }, 1000*60*60)
    }

    componentWillUnmount () {
            clearInterval(this.myInterval)
    }

    
       
}

 
export default Timer;