const initial:any=localStorage.getItem("log") || localStorage.getItem("ini");
  const user=JSON.parse(initial);
export const initialState:any = {
    logins:user || [],
    posts:[],
    getpost:[],
    profilepost:[],
    chathomedis:[],
    isprofcheck:false,
    newacount:[],
    posterid:[],
    posterid1:[],
    homeposterid:[],
    homeposterid1:[],
    islogin:false,
  
   
};
export const stateReducer = (state:any, action:any) => {

    switch(action.type){
        case "PUSH":
            return{
                ...state,
                logins: action.payload,
                
            };
            case "POST":
                return{
                    ...state,
                    posts:action.payload,
                }
                case "DELETE":
                    return{
                    ...state,
                    posts:action.payload,
                    }

                case "EDITPOST":
                    return{
                        ...state,
                        getpost:action.payload,
                    }
                    case "PROFILEPOST":
                        return{
                            ...state,
                            profilepost:action.payload,
                            isprofcheck:true,

                        }
                       
                        case "CHATHOMEDIS":
                        return{
                            ...state,
                            chathomedis:action.payload,
                        }
                        case "NEW_SIGIN_UP":
                        return{
                            ...state,
                            newacount:action.payload,
                            isprofcheck:false,
                        }
                        case "POSTERID":
                        return{
                            ...state,
                            posterid:action.payload,
                           
                        }
                        case "POSTERID1":
                            return{ 
                                ...state,
                                posterid1:action.payload,
                               
                            }
                        case "HOME_POST_ID":
                        return{
                            ...state,
                            homeposterid:action.payload,
                           
                        }
                        case "HOME_POST_ID1":
                            return{
                                ...state,
                                homeposterid1:action.payload,
                               
                            }
                            case "ISLOGIN":
                                return{
                                    ...state,
                                    islogin:action.payload,
                                   
                                }
                                case "LOGOUT":
                                    return{
                                        ...state,
                                        islogin:action.payload,
                                       
                                    }

    }
}