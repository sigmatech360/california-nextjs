import React from 'react'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoBriefcase } from 'react-icons/io5'

const CustomExperience = () => {
  return (
    <section className='custom-experience-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="custom-experience-txt">
                        <h2>Discover <span>Generative AI Integration</span> Services​ in California</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="custom-experience-define">
                        <h4>72%</h4>
                        <div className="custom-experience-txt">
                            <h5>Increase Efficiency with Generative AI</h5>
                            <p>72% of our clients who used AI for smoother business flow increased process efficiency with AI-powered automation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="experience-short-txt">
                        <h6><span>65%</span> improved customer satisfaction using AI chat integration.</h6>
                        <span><BsEmojiSmileFill /></span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="experience-short-txt">
                        <h6><span>68%</span> reduced operational costs through predictive data analytics.</h6>
                        <span><HiSpeakerphone /></span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="experience-short-txt">  
                        <h6><span>85%</span> achieved faster decision-making with AI insights.</h6>
                        <span><IoBriefcase /></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomExperience