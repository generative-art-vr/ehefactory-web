import { Canvas } from "@react-three/fiber";
import React, { useContext} from 'react';
import ThreeFiberBasics from './ThreeFiberBasics';
import ThreeFiberDreiLeva from "./ThreeFiberDreiLeva";
import ThreeFiberDefault from "./ThreeFiberDefault";
import ShaderEngine from "./ShaderEngine";
import ShaderLab from "./ShaderLab";
import ParticleSimulator from "./ParticleSimulator";
import FBOParticlesChaotic from "./FBOParticlesChaotic";
import FBOParticlesGeometric from "./FBOParticlesGeometric";
import DynamicTorus from "./DynamicTorus";

interface CanvasContextProps {
    selectedComponent: string;
    setSelectedComponent: (value: string) => void;
  }
  
  export const CanvasContext = React.createContext<CanvasContextProps>({
    selectedComponent: '',
    setSelectedComponent: () => {},
  });

  const NotRealCanvas: React.FC = () => {
      const { selectedComponent } = useContext(CanvasContext);
  
      return (
        <div style={{
        zIndex: -99,
        background: "black",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"}}>
            {(() => {
                switch (selectedComponent) {
                    case 'ThreeFiberBasics':
                        return <ThreeFiberBasics />;
                    case 'ThreeFiberDreiLeva':
                        return <ThreeFiberDreiLeva />;
                    case 'ShaderEngine':
                        return <ShaderEngine />;
                    case 'ShaderLab':
                        return <ShaderLab />;
                    case 'DynamicTorus':
                        return <DynamicTorus />;
                    case 'ParticleSimulator':
                        return <ParticleSimulator />;
                    case 'FBOParticlesChaotic':
                        return <FBOParticlesChaotic />;
                    case 'FBOParticlesGeometric':
                        return <FBOParticlesGeometric />;
                    case 'x':
                        return <ThreeFiberDefault />;
                    default:
                        return <ShaderLab />;

                }
            })()}
        </div>
      );
  }
   
 
export default NotRealCanvas;