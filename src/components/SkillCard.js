import "./SkillCardStyles.css"

const SkillCard =(props)=>{
    return(
        <div class="skill-info">
            <span class="skill-name">{props.skill_name}</span>
        </div>
    )
}

export default SkillCard