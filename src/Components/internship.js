import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Internships extends React.Component{
    // state = {
    //     // array uses square bracket, not curly braces.
    //     date: "9-5-19",
    //     company_details: [{Cname:"ABC", desc:"i am good company", field:"Machine Learning", duration: "2 months"},{Cname:"DEF", desc:"i am bad company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"},{Cname:"ABC", desc:"i am good company", field:"Machine Learning", duration: "2 months"},{Cname:"DEF", desc:"i am bad company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"},{Cname:"ABC", desc:"i am good company", field:"Machine Learning", duration: "2 months"},{Cname:"DEF", desc:"i am bad company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"}],
    // } // no comma
    render(){
      // var companyNames = this.state.company_details;
      var companyNames = this.props.company_details;
      companyNames = companyNames.map(function(item, index){
        return(
        <div style={{width: "580px"}} class="ui raised card olive">
            <div className="content">
            <div className="header"> { item.Cname } </div>
            <div className="meta">
                <span className="category"> {item.field} </span>
            </div>
            <div className="description">
                <p>{ item.desc} </p>
            </div>
            </div>
            <div className="ui move reveal">
            <div className="visible content">
                <div className="ui bottom attached button olive">
                <i className="hourglass start icon"></i>
                {item.duration}
                </div>
            </div>
            <div className="hidden content">
              <Link to={'/'+item.Cname+item.field}>
                <div className="ui bottom attached button olive">
                  <i class="add icon"></i>
                  Know more
                </div>
              </Link>
            </div>
            </div>

        </div>
        );
    });


    // var newmin = this.props.dynamic_content.time.min;
    // newmin += 1;

    function work(){
      this.setState({day:"Friday"});
    }

    console.log("helllo");
    return(
      <div>
        {/*<span> { this.props.dynamic_content.date } &nbsp;  {this.props.day} &nbsp; {this.props.dynamic_content.time.hour}:{this.props.dynamic_content.time.min}</span> <br/><br/>*/}
        <div> { companyNames } </div>

        {/* <div> { this.state.result }</div>
        {/* <Filter></Filter>
        <h2> { this.state.date } </h2>
        <div> { companyNames } </div>
        <p> {this.state.field} </p> */}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // here renaming not necessary, since you want the whole data (object).
  console.log(state);
  return state;
}

// const mapDispatchToProps = (dispatch) => {
//   return{
//     deleteInternship : (id) => { dispatch({type:"DELETE_INTERNSHIP", id:id } ) }
//   }
// }

// export default Internships;
export default connect(mapStateToProps)(Internships);
