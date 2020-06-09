const initState = {
  company_details: [{Cname:"ABC", desc:"i am good company", field:"Machine Learning", duration: "2 months"},{Cname:"DEF", desc:"i am bad company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"},{Cname:"ABC", desc:"i am good company", field:"Machine Learning", duration: "2 months"},{Cname:"DEF", desc:"i am bad company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"},{Cname:"ABC", desc:"i am good company", field:"Machine Learning", duration: "2 months"},{Cname:"DEF", desc:"i am bad company", field:"Machine Learning", duration: "2 months"},{Cname:"GHI", desc:"i am okay company", field:"Machine Learning", duration: "2 months"}]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
