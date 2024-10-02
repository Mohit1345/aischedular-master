import React, { useEffect } from "react";
import { useState } from "react";
// import { makeSchedule } from './preprocess';
import "./index.css";
import Schedule from "../Schedule/index";
import 'react-toastify/dist/ReactToastify.css'


import LoadingBar from "react-top-loading-bar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";


export default function AISchedular() {
 

  const present = (name, window) => {
    if (window == "select" && selectedChapters.includes(name)) {
      return true;
    }
    if (window == "strongChapters" && strongChapters.includes(name)) {  
      return true;
    }
    if (window == "weakChapters" && weakChapters.includes(name)) {
      return true;
    }

    if (window == "intresting" && intrestingChapters.includes(name)) {
      return true;
    }

    return false;
  };

  const [buttonList, setButtonList] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [strongChapters, setStrongChapters] = useState([]);
  const [weakChapters, setWeakChapters] = useState([]);
  const [intrestingChapters, setIntrestingChapters] = useState([]);
  const [html, setHtml] = useState();
  const [scheduleWindow, setScheduleWindow] = useState(false);
  const [studyhrs, setStudyhrs] = useState();
  const [targetdays, settargetDays] = useState();
  const [progress, setProgress] = useState(0);
  const [plan_type,setPlanType] = useState("Long_Term");
  const [showModal, setShowModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [window, setWindow] = useState("lastInfo");
  const navigate=useNavigate();
  const chapters = [
    "Cell - The Unit of Life",
    "Organisms and Populations",
    "Photosynthesis in Higher Plants",
    "Digestion and Absorption",
    "Excretory Products and their Elimination",
    "Body Fluids and Circulation",
    "Structural Organisation in Animals",
    "Microbes in Human Welfare",
    "Environmental Issues",
    "Neural Control and Coordination",
    "Morphology of Flowering Plants",
    "Chemical Coordination and Integration",
    "Cell Cycle and Cell Division",
    "Principles of Inheritance and Variation",
    "Molecular Basis of Inheritance",
    "Animal Kingdom",
    "Respiration in Plants",
    "Locomotion and Movement",
    "Strategies for Enhancement in Food Production",
    "Breathing and Exchange of Gases",
    "Reproductive Health",
    "Evolution",
    "Plant Kingdom",
    "Biotechnology Principles and Processes",
    "Mechanical Properties of Solids",
    "Biological Classification",
    "Biodiversity and Conservation",
    "Human Health and Disease",
    "Dual Nature of Radiation and Matter",
    "Sexual Reproduction in Flowering Plants",
    "Ecosystem",
    "Semiconductors ",
    "Plant Growth and Development",
    "Mineral Nutrition",
    "Human Reproduction",
    "Anatomy of Flowering Plants",
    "Chemical bonding amd Molecular Structure",
    "The Living World",
    "Current Electricity ",
    "Biotechnology and its Applications",
    "Systems of Particles and Rotational Motion",
    "Ray Optics",
    "Polymers",
    "Electrostatic Potential and Capacitance",
    "Thermal Properties of Matter",
    "Thermodynamics ",
    "Waves",
    "Magnestism and Matter",
    "Equilibrium",
    "Oscillations",
    "EM Waves",
    "Laws of Motion",
    "Gravitation ",
    "Moving Charges and Magnetism",
    "Structure of atom",
    "Units and Measurements ",
    "Transport in plants",
    "Classiﬁcation Of elements and periodicity in its properties ",
    "Atoms",
    "Work Energy and Power ",
    "Wave Optics",
    "Chemical kinetics",
    "GOC",
    "Nuclei",
    "Electrochemistry ",
    "Surface Chemistry ",
    "Solutions",
    "P block(12th part)",
    "Haloalkanes and haloaerenes",
    "Kinetic Theory ",
    "Alcohol,phenol and ethers",
    "Aldehydes,ketones and carboxylic acid",
    "Thermodynamics",
    "Amines",
    "Coordination compounds ",
    "D and F block",
    "Hydrocarbons",
    "Biomolecules",
    "P block (11th part)",
    "Motion in a Plane",
    "Electromagnetic Induction ",
    "Reproduction in Organisms",
    "Redox Reaction",
    "Motion in a Straight Line ",
    "Electric Charges and Field",
    "Mechanical Properties of Fluid",
    "Some basic concepts of chemistry",
    "Alternating Current ",
    "Physical World",
  ];

  const [display, setDisplay] = useState(chapters);

  const handleSelected = (name, window) => {
    if (window === "select") {
      if (selectedChapters.includes(name)) {
        const index = selectedChapters.indexOf(name);
        if (index > -1) {
          // only splice array when item is found
          let copy = [...selectedChapters];
          copy.splice(index, 1);
          setSelectedChapters(copy);
        }
      } else {
        console.log("Window Select");
        let copy = [...selectedChapters];
        copy.push(name);
        setSelectedChapters(copy);
        console.log(selectedChapters);
      }
    }

    if (window == "strongChapters") {
      if (strongChapters.includes(name)) {
        const index = strongChapters.indexOf(name);
        if (index > -1) {
          // only splice array when item is found
          let copy = [...strongChapters];
          copy.splice(index, 1);
          setStrongChapters(copy);
        }
      } else {
        let copy = [...strongChapters];
        copy.push(name);
        setStrongChapters(copy);
      }
    }

    if (window == "weakChapters") {
      if (weakChapters.includes(name)) {
        const index = weakChapters.indexOf(name);
        if (index > -1) {
          // only splice array when item is found
          let copy = [...weakChapters];
          copy.splice(index, 1);
          setWeakChapters(copy);
        }
      } else {
        let copy = [...weakChapters];
        copy.push(name);
        setWeakChapters(copy);
      }
    }

    if (window == "intresting") {
      if (intrestingChapters.includes(name)) {
        const index = intrestingChapters.indexOf(name);
        if (index > -1) {
          // only splice array when item is found
          let copy = [...intrestingChapters];
          copy.splice(index, 1);
          setIntrestingChapters(copy);
        }
      } else {
        let copy = [...intrestingChapters];
        copy.push(name);
        setIntrestingChapters(copy);
      }
    }
  };

  const handleHover = (itemName) => {
    setHoveredItem(itemName);
  };


  const submitSchedule = async () => {
    
    if(!studyhrs||!targetdays||!plan_type||selectedChapters.length===0){
      toast.error("Fill all the fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    setProgress(30);

    let schedule = await fetch(process.env.REACT_APP_BACKEND_URL+"/generateschedule", {
      method: "post",
      
      body: JSON.stringify({
        strongChapters,
        weakChapters,
        intrestingChapters,
        selectedChapters,
        studyhrs,
        targetdays,
        plan_type
      }),
      headers: {
       
        "content-type": "application/json",
      },
    });
    setProgress(70);
    schedule = await schedule.json();
    console.log(schedule.schedule);
    if(schedule.success===1){
    // navigate(`/viewschedule/${schedule.schedule._id}`);
    setHtml(schedule.schedule);
    setProgress(100);
    setScheduleWindow(true);
    return;
    }
    else{
      toast.error(schedule.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    setProgress(100);

    }    
  };

  useEffect(() => {
    if (window == "select") {
      setDisplay(chapters);
    }
    if (window == "strongChapters") {
      setDisplay(selectedChapters);
    }
    if (window == "weakChapters") {
      const weak = selectedChapters.filter(
        (chapter) => !strongChapters.includes(chapter)
      );

      console.log(weak);

      setDisplay(weak);
    }
    if (window == "intresting") {
      setDisplay(selectedChapters);
    }
  }, [window]);

  if (scheduleWindow) {
    return <Schedule html={html} />;
  }

  const presentTab = (windowName) => {
    if (windowName === window) {
      return true;
    } else {
      return false;
    }
  };

  

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
      <ToastContainer/>
      <LoadingBar
        color="#800060"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={5}
      />
      <div class="containerdif">
      <div className="headsch">
      <div className="headmentor"><img className = "logo_on_scheduler" src={require("./apple-touch-icon.png")} alt="Help GIF" />
      <h4 className="headmentormee">Mentormee</h4></div>
        <div class="heading_scheduler">
        {/* <img className = "logo_on_scheduler" src={require("./apple-touch-icon.png")} alt="Help GIF" /> */}
          <h2>Saarthi AI Scheduler</h2>
        </div>
        </div>

        <div class="scheduler_container">
          {window == "select" ||
          window == "strongChapters" ||
          window == "weakChapters" ||
          window == "intresting" ? (
            <>
              <div className="sections">
              
                <button
                  className="stepBox"
                  onClick={() => setWindow("lastInfo")}
                  style={
                    presentTab("lastInfo")
                      ? { backgroundColor: "#FFCACC" }
                      : null
                  }
                >
                  Schedule Type
                </button>
                <ArrowForwardIcon className="arrow" />
                <button
                  className="stepBox"
                  onClick={() => setWindow("select")}
                  style={
                    presentTab("select") ? { backgroundColor: "#FFCACC" } : null
                  }
                >
                  {" "}
                  Select Chapters{" "}
                </button>
                <ArrowForwardIcon className="arrow" />
                <button
                  className="stepBox"
                  onClick={() => setWindow("strongChapters")}
                  style={
                    presentTab("strongChapters")
                      ? { backgroundColor: "#FFCACC" }
                      : null
                  }
                >
                  {" "}
                  Strong{" "}
                </button>
                <ArrowForwardIcon className="arrow" />
                {/* <button className="stepBox"> Strong </button> */}
                <button
                  className="stepBox"
                  onClick={() => setWindow("weakChapters")}
                  style={
                    presentTab("weakChapters")
                      ? { backgroundColor: "#FFCACC" }
                      : null
                  }
                >
                  {" "}
                  Weak{" "}
                </button>
                <ArrowForwardIcon className="arrow" />
                <button
                  className="stepBox"
                  onClick={() => setWindow("intresting")}
                  style={
                    presentTab("intresting")
                      ? { backgroundColor: "#FFCACC" }
                      : null
                  }
                >
                  {" "}
                  Intresting{" "}
                </button>
                <ArrowForwardIcon className="arrow" />
                {/* <div class="submit_container"> */}
<button
  className="submitBox submitBox2"
  onClick={() => submitSchedule()}
>
  Get Schedule
</button>

              </div>
              
              <div className="question_container">
      <p className="question">
        {window === "select" ? "Select chapters which you wanna prepare" :
         window === "strongChapters" ? "Select your strong chapters" :
         window === "weakChapters" ? "Select your weak chapters" :
         window === "intresting" ? "What chapters do you find interesting" :
         ""}
      </p>
    </div>

              
              <div className="stepBox_container">
              
                {window==="select"?
                display.map((name, index) => (
                  <>{index === 0
                    ? <div className="sectionName">Biology Section👉</div>
                    : index === 38
                    ? <div className="sectionName">Physics Section👉</div>
                    : index === 61
                    ? <div className="sectionName">Chemistry Section👉 </div>
                    : null} 
                    
                    
                  <button
                    className="optionBox"
                    onClick={() => {
                      handleSelected(name, window);
                    }}
                    key={index}
                    style={
                      present(name, window)
                        ? { backgroundColor: "#FFCACC" }
                        : null
                    }
                  >
                    {name}
                  </button>
                  
                    </>
                ))
                :display.map((name, index) => (
                  <button
                    className="optionBox"
                    onClick={() => {
                      handleSelected(name, window);
                    }}
                    key={index}
                    style={
                      present(name, window)
                        ? { backgroundColor: "#FFCACC" }
                        : null
                    }
                  >
                    {name}
                  </button>
                ))}
                {/* next button */}
                <div style={{ position: "relative",minWidth:"100%", width: "100%", height: "45px" }}>
  <button
    className="stepBox sb nextButton"
    onClick={() => {
      if (presentTab("select")) {
        setWindow("strongChapters");
      } else if (presentTab("strongChapters")) {
        setWindow("weakChapters");
      } else if (presentTab("weakChapters")) {
        setWindow("intresting");
      } else if (presentTab("intresting")) {
        submitSchedule();
      }
    }}
  >
    Next
  </button>
</div>



              </div>
      
            </>
          ) : (
            <>   
            {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Display your GIF here */}
            <img style={{height:"45rem",width:"45rem"}} src={require("./my_gif.gif")} alt="Help GIF" />

            {/* Close button */}
            <button className="submitBox" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
              <div class="lastInfo">
                <div class="input_container">
                <h3>What Type of schedule you want?</h3>
                  <div class="lastInfo_1">
                  
                  <div class="usersss_input">
                  <label>Daily Plan</label>
                  <div onMouseEnter={() => handleHover('Daily Plan')} onMouseLeave={() => handleHover(null)} className="hover_detail">?</div>
                  <input name="plan_selector" onChange={() => setPlanType("Long_Term")} key={2} type="radio" />
                  </div>
                             <div className="hover_detail_mobile">
            Suitable for syllabus completion and daily target mentors.
          </div>
                  {hoveredItem === 'Daily Plan' && (
          <div className="hover_detail2">
            Suitable for syllabus completion and daily target mentors.
          </div>
        )}      
        <div class="usersss_input">
                  <label>Revision Plan</label>
                  <div onMouseEnter={() => handleHover('Revision Plan')} onMouseLeave={() => handleHover(null)} className="hover_detail">?</div>
                  <input name="plan_selector" onChange={() => setPlanType("Revision_Plan")} key={1} type="radio" />
                  </div>
                  <div className="hover_detail_mobile">
            Suitable for rapid revision and final revisions.
          </div>
                  {hoveredItem === 'Revision Plan' && (
          <div className="hover_detail3">
            Suitable for rapid revision and final revisions.
          </div>
        )}  
                  </div>
               

                  <div class="lastInfo_1">
                    <label>Daily study hours: </label>
                    <input
                      className="inputBox"
                      type="number"
                      placeholder="hours"
                      onChange={(e) => setStudyhrs(e.target.value)}
                    />
                  </div>
                  <div class="lastInfo_1">
                    <label>Target Days: </label>
                    <input
                      className="inputBox"
                      type="number"
                      placeholder="days"
                      onChange={(e) => settargetDays(e.target.value)}
                    />
                  </div>
                  <div class="next_container">
                  <div className="nextButton">
                    <button
                      className="submitBox"
                      onClick={() => setWindow("select")}
                    >
                      Next
                    </button>
                    </div>
                    <div className="nextButton">
                    <button
                      className="submitBox"
                      onClick={openModal}
                    >
                      Help
                    </button>
                    </div>
                  </div>
                </div>
                <>
                    
                    </> 
              </div>
            </>
          )}
        </div>

        
      </div> 
      
    </>
  );
}

// const chapters = ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell - The Unit of Life', 'Cell Cycle and Cell Division', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Transport in plants', 'Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues', 'Animal Kingdom', 'Biomolecules', 'Breathing and Exchange of Gases', 'Digestion and Absorption', 'Structural Organisation in Animals', 'Chemical Coordination and Integration', 'Neural Control and Coordination', 'Locomotion and Movement', 'Excretory Products and their Elimination', 'Body Fluids and Circulation', 'Biotechnology and its Applications', 'Biotechnology Principles and Processes', 'Human Health and Disease', 'Reproductive Health', 'Human Reproduction', 'Evolution', 'The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell - The Unit of Life', 'Cell Cycle and Cell Division', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Transport in plants', 'Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues', 'Animal Kingdom', 'Biomolecules', 'Breathing and Exchange of Gases', 'Digestion and Absorption', 'Structural Organisation in Animals', 'Chemical Coordination and Integration', 'Neural Control and Coordination', 'Locomotion and Movement', 'The Living World', 'Biological Classification', 'Plant Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell - The Unit of Life', 'Cell Cycle and Cell Division', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Transport in plants', 'Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues', 'Animal Kingdom', 'Biomolecules', 'Breathing and Exchange of Gases', 'Digestion and Absorption', 'Structural Organisation in Animals', 'Chemical Coordination and Integration', 'Neural Control and Coordination']
