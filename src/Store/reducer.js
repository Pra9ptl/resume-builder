const initialState = {
  signedIn: {
    isSignedIn: false,
    email: ""
  },

  personalInfo: {
    fullname: "",
    email: "",
    address: "",
    mobile: ""
  },

  education: [],

  skills: {
    areaOfInterese: "",
    programmingLanguages: "",
    toolsandTech: "",
    preferedFieldofWork: ""
  },

  experience: [],

  webLinks: {
    linkedIn: "",
    gitHub: "",
    bitBucket: "",
    upWork: ""
  },

  achievement: [],

  hobbies: []
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNED_IN_STATUS":
      return {
        ...state,
        signedIn: {
          ...state.signedIn,
          [action.payload.field]: action.payload.value
        }
      };

    case "GET_CLOUD_DATA":
      return {
        ...state,
        personalInfo: action.payload.personalInfo,
        education: action.payload.education,
        skills: action.payload.skills,
        experience: action.payload.experience,
        webLinks: action.payload.webLinks,
        achievement: action.payload.achievement,
        hobbies: action.payload.hobbies
      };

    case "SIGN_OUT":
      return {
        signedIn: {
          isSignedIn: false,
          email: ""
        },

        personalInfo: {
          fullname: "",
          email: "",
          address: "",
          mobile: ""
        },

        education: [],

        skills: {
          areaOfInterese: "",
          programmingLanguages: "",
          toolsandTech: "",
          preferedFieldofWork: ""
        },

        experience: [],

        webLinks: {
          linkedIn: "",
          gitHub: "",
          bitBucket: "",
          upWork: ""
        },

        achievement: [],

        hobbies: []
      };
    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.payload.field]: action.payload.value
        }
      };

    case "ADD_EDUCATION_LIST":
      const edu = [...state.education];
      edu.push(action.payload);
      return {
        ...state,
        education: edu
      };

    case "UPDATE_EDUCATION_INFO":
      return {
        ...state,
        education: state.education.map(education => {
          if (education.deg_id === action.payload.deg_id) {
            education.deg_id = action.payload.degreeTitle;
            education.degreeTitle = action.payload.degreeTitle;
            education.college = action.payload.college;
            education.sYear = action.payload.sYear;
            education.eYear = action.payload.eYear;
            education.learnings = action.payload.learnings;
          }
          return education;
        })
      };

    case "DELETE_EDUCATION_INFO":
      return {
        ...state,
        education: state.education.filter(
          education => education.deg_id !== action.payload
        )
      };

    case "UPDATE_SKILLS_INFO":
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.payload.field]: action.payload.value
        }
      };

    case "ADD_HOBBIES":
      const hob = [...state.hobbies];
      hob.push(action.payload);
      return {
        ...state,
        hobbies: hob
      };

    case "UPDATE_HOBBIES":
      return {
        ...state,
        hobbies: state.hobbies.map(h => {
          if (h.hobbyId === action.payload.hobbyId) {
            h.hobbyName = action.payload.hobbyName;
          }
          return h;
        })
      };

    case "ADD_ACHIEVEMENT":
      const ach = [...state.achievement];
      ach.push(action.payload);
      return {
        ...state,
        achievement: ach
      };

    case "UPDATE_ACHIEVEMENT":
      return {
        ...state,
        achievement: state.achievement.map(a => {
          if (a.achievementId === action.payload.achievementId) {
            a.achievementTitle = action.payload.achievementTitle;
          }
          return a;
        })
      };

    case "ADD_EXPERIENCE_LIST":
      const exp = [...state.experience];
      exp.push(action.payload);
      return {
        ...state,
        experience: exp
      };

    case "UPDATE_EXPRIENCE_INFO":
      return {
        ...state,
        experience: state.experience.map(e => {
          if (e.expId === action.payload.expId) {
            e.expId = action.payload.companyName;
            e.companyName = action.payload.companyName;
            e.position = action.payload.position;
            e.jobDescription = action.payload.jobDescription;
            e.startDate = action.payload.startDate;
            e.endDate = action.payload.endDate;
          }
          return e;
        })
      };

    case "DELETE_EXPERIENCE_INFO":
      return {
        ...state,
        experience: state.experience.filter(e => e.expId !== action.payload)
      };

    case "UPDATE_WEBLINKS":
      return {
        ...state,
        webLinks: {
          ...state.webLinks,
          [action.payload.field]: action.payload.value
        }
      };

    default:
      return state;
  }
};

export default resumeReducer;
