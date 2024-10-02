import React, { useEffect, useState } from "react";
import "./style.css";
import Chatbot from '../Chatbot/Chatbot'

import { useParams } from "react-router-dom";

export default function Schedule(props) {
  const params = useParams();

  const [htmlrender, sethtmlrender] = useState(props.html);
  const [scheduleupdated,setscheduleupdated]=useState(false);


  return (
    <div >
     
      <div className="supercontainer">
      <div dangerouslySetInnerHTML={{ __html: htmlrender }} className="dengerdiv"></div>
      <Chatbot className="bot" schedule={htmlrender}/>
      </div>
      {/* <div class="schedule">
        <div class="day">
          <div class="cardHeading">Day 1</div>
          <div class="cardContent">
            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 1:</p>
                  <p class="chapterName">Organisms and Populations</p>
                </div>
                <p class="studyHours">Study Hours: 1.5</p>
              </div>
              <p class="importantTopics">
                Important Topics: Organism and Its Environment Major Abiotic
                Factors Response to Abiotic Factors Adaptations Populations
                Populations Growth Life History Variation Population
                Interactions
              </p>
            </div>

            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 2:</p>
                  <p class="chapterName">Structural Organisation in Animals</p>
                </div>
                <p class="studyHours">Study Hours: 1.5</p>
              </div>
              <p class="importantTopics">
                Important Topics: Animal tissues Organ and organ system
                Earthworm - morphology and anatomy Cockroach - Morphology and
                anatomy Frogs - Morphology and anatomy
              </p>
            </div>
          </div>
        </div>
        <div class="day">
          <div class="cardHeading">Day 2</div>
          <div class="cardContent">
            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 1:</p>
                  <p class="chapterName">Structural Organisation in Animals</p>
                </div>
                <p class="studyHours">Study Hours: 1</p>
              </div>
              <p class="importantTopics">
                Important Topics: Animal tissues Organ and organ system
                Earthworm - morphology and anatomy Cockroach - Morphology and
                anatomy Frogs - Morphology and anatomy
              </p>
            </div>

            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 2:</p>
                  <p class="chapterName">
                    Chemical Coordination and Integration
                  </p>
                </div>
                <p class="studyHours">Study Hours: 1.5</p>
              </div>
              <p class="importantTopics">
                Important Topics: Endocrine System Classification of hormones
                Human Endocrine Glands Hormones - Heart, Kidney, GIT Hormones
                and Hormonal Disorders Mechanism of Hormone action
              </p>
            </div>
          </div>
        </div>
        <div class="day">
          <div class="cardHeading">Day 3</div>
          <div class="cardContent">
            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 1:</p>
                  <p class="chapterName">
                    Chemical Coordination and Integration
                  </p>
                </div>
                <p class="studyHours">Study Hours: 1.5</p>
              </div>
              <p class="importantTopics">
                Important Topics: Endocrine System Classification of hormones
                Human Endocrine Glands Hormones - Heart, Kidney, GIT Hormones
                and Hormonal Disorders Mechanism of Hormone action
              </p>
            </div>

            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 2:</p>
                  <p class="chapterName">Photosynthesis in Higher Plants</p>
                </div>
                <p class="studyHours">Study Hours: 1.5</p>
              </div>
              <p class="importantTopics">
                Important Topics: Photosynthesis Light Reaction Electron
                Transport Chain C3 and C4 Pathways Photorespiration
              </p>
            </div>
          </div>
        </div>
        <div class="day">
          <div class="cardHeading">Day 4</div>
          <div class="cardContent">
            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 1:</p>
                  <p class="chapterName">Photosynthesis in Higher Plants</p>
                </div>
                <p class="studyHours">Study Hours: 1.5</p>
              </div>
              <p class="importantTopics">
                Important Topics: Photosynthesis Light Reaction Electron
                Transport Chain C3 and C4 Pathways Photorespiration
              </p>
            </div>

            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 2:</p>
                  <p class="chapterName">Microbes in Human Welfare</p>
                </div>
                <p class="studyHours">Study Hours: 1</p>
              </div>
              <p class="importantTopics">
                Important Topics: Microbes in Household Products Microbes in
                Industrial Products Microbes in Sewage Treatment Microbes in
                Production of Biogas Microbes as Biocontrol Agents Microbes as
                Biofertilisers
              </p>
            </div>
          </div>
        </div>
        <div class="day">
          <div class="cardHeading">Day 5</div>
          <div class="cardContent">
            <div class="cardChapter">
              <div class="contentHeading">
                <div class="contentChapter">
                  <p class="chapterNumber">Chapter 1:</p>
                  <p class="chapterName">Microbes in Human Welfare</p>
                </div>
                <p class="studyHours">Study Hours: 1</p>
              </div>
              <p class="importantTopics">
                Important Topics: Microbes in Household Products Microbes in
                Industrial Products Microbes in Sewage Treatment Microbes in
                Production of Biogas Microbes as Biocontrol Agents Microbes as
                Biofertilisers
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
