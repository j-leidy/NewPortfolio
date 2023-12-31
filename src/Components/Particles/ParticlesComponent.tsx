import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "styled-components";

export const ParticlesComponent = () => {
    const customInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const theme = useTheme();
    return (
        <Particles
            id="tsparticles"
            init={customInit}
            options={theme.particlesOptions}
            width="100%"
            height="150vh"
        />
    );
};
