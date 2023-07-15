import "./SkillsStyles.css"
import SkillCard from "./SkillCard"
import SkillCardData from './SkillCardData'
import SkillCardData2 from './SkillCardData2'

const Skills = (props) =>{
        return(
            <div>
                <div className="Hero">
                    <div className="contentBox">
                        <div class="skills">
                            <ul>
                                <li>
                                    {
                                        SkillCardData.map((SkillCardData) =>
                                        <SkillCard skill_name = {SkillCardData.skill_name} />)
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contentBox">
                        <div class="skills">
                            <ul>
                                <li>
                                    {
                                        SkillCardData2.map((SkillCardData2) =>
                                        <SkillCard skill_name = {SkillCardData2.skill_name} />)
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Skills