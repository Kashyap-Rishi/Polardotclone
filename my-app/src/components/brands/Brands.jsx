import React from "react";
import "./brands.scss";

const Brands = () =>{
    return(
        <div className="BrandsSection">
            <div className="Headingarea">
                <div className="center">
                    <div className="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="Heading"><h3>Trusting By</h3></div>
                <div className="slogan">Collaborating  with  Brands,  Business  &  People.</div>
                <div className="leftone"></div>
                <div className="slider">
                    <div className="slide-track">

                         {/* 9 slides */ }
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/baac4803be79e5d2803f460838648153c841c6ee/5f152/assets/img/clients_logs/logo-1.png"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/475c2c218939b90b2aa402a3e0fd3ab4b38537f6/797bb/assets/img/clients_logs/logo-2.png"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f87d3d9278094b0a76c4c7f4001262147d340e61/b8867/assets/img/clients_logs/logo-3.png"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/9e43453e233955ff19ad13969816f8050bcf6a74/37c8d/assets/img/clients_logs/logo-4.png"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f1f13137de7a8a8aaec33efdf62bf3fcfa3c4f24/a8fb0/assets/img/clients_logs/logo-5.png"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/86828638b0dc2c2b6f538f15b08b3a050110a3c9/7a2b8/assets/img/clients_logs/logo-6.png"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/6a95d8de8215cba8d05a88c6ab88c9d1608c415b/73c6d/assets/img/clients_logs/logo-7.png"></img>
                        </div>

                         {/* same 9 slides */ }

                         <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/baac4803be79e5d2803f460838648153c841c6ee/5f152/assets/img/clients_logs/logo-1.png" className="duplicate"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/475c2c218939b90b2aa402a3e0fd3ab4b38537f6/797bb/assets/img/clients_logs/logo-2.png" className="duplicate"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f87d3d9278094b0a76c4c7f4001262147d340e61/b8867/assets/img/clients_logs/logo-3.png" className="duplicate"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/9e43453e233955ff19ad13969816f8050bcf6a74/37c8d/assets/img/clients_logs/logo-4.png" className="duplicate"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f1f13137de7a8a8aaec33efdf62bf3fcfa3c4f24/a8fb0/assets/img/clients_logs/logo-5.png" className="duplicate"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/86828638b0dc2c2b6f538f15b08b3a050110a3c9/7a2b8/assets/img/clients_logs/logo-6.png" className="duplicate"></img>
                        </div>
                        <div className="slide">
                            <img src="https://d33wubrfki0l68.cloudfront.net/6a95d8de8215cba8d05a88c6ab88c9d1608c415b/73c6d/assets/img/clients_logs/logo-7.png" className="duplicate"></img>
                        </div>

                    </div>

                </div>
                <div className="rightone"></div>
                
            </div>
        </div>
    )
}

export default Brands