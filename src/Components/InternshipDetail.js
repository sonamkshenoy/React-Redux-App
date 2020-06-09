import React, {Component} from 'react';
import {connect} from 'react-redux';

class InternshipDetail extends Component{
  state = {
    id : null
  }
  componentDidMount(){
    let id = this.props.match.params.internship_id;
    this.setState({
      id:id
    })
  }
  render(){
    return(
      <div>
        <h1>{ this.state.id }</h1>
        <p> {this.props.company_details.desc}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.internship_id;
  console.log("hello",id);
  return{
    company_details: state.company_details.find((company)=>company.Cname+company.field ===id)
  }
}

export default connect(mapStateToProps)(InternshipDetail);
