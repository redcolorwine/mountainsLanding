import cmedia from './main.module.css';
import React from 'react';
import mountainSecond from './../media/natumountains.jpg';
import wilheim from '../media/wilheim.jpg';
import erosion from '../media/erosion.jpg';
import blockmountain from '../media/blockmountain.jpg';
import volcanoes from '../media/volcanoes.jpg';
import fold from '../media/fold.jpg';
import { useInView } from 'react-intersection-observer';
const Main = (props) => {
    const { ref: firstRef, inView: firstIsVisible } = useInView();
    const { ref: secondRef, inView: secondIsVisible } = useInView();
    const { ref: thirthRef, inView: thirthIsVisible } = useInView();
    const { ref: fourthRef, inView: fourthIsVisible } = useInView();
    const { ref: fiveRef, inView: fiveIsVisible } = useInView();
    return (
        <div className={cmedia.main}>
            <div className={cmedia.head}>
                <h1>MOUNTAINS SPIRIT</h1>
                <p>page about high nature</p>
            </div>

            <div className={cmedia.information}>
                <div className={cmedia.firstBlock}>
                    <div ref={firstRef} className={`${cmedia.first} ${firstIsVisible ? cmedia.animateBlock : ' '}`}>
                        <h1>MOUNTAINS</h1>
                        <p>A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges.
                            Mountains are formed through tectonic forces, erosion, or volcanism, which act on time scales of up to tens of millions of years. Once mountain building ceases, mountains are slowly leveled through the action of weathering, through slumping and other forms of mass wasting, as well as through erosion by rivers and glaciers.
                            High elevations on mountains produce colder climates than at sea level at similar latitude. These colder climates strongly affect the ecosystems of mountains: different elevations have different plants and animals. Because of the less hospitable terrain and climate, mountains tend to be used less for agriculture and more for resource extraction, such as mining and logging, along with recreation, such as mountain climbing and skiing.
                            The highest mountain on Earth is Mount Everest in the Himalayas of Asia, whose summit is 8,850 m (29,035 ft) above mean sea level. The highest known mountain on any planet in the Solar System is Olympus Mons on Mars at 21,171 m (69,459 ft).</p>
                    </div>
                    <div ref={secondRef} className={`${cmedia.second} ${secondIsVisible ? cmedia.animateBlock : ' '}`}>
                        <h1>Definition</h1>
                        <p>There is no universally accepted definition of a mountain.
                            Elevation, volume, relief, steepness, spacing and continuity
                            have been used as criteria for defining a mountain. In the
                            Oxford English Dictionary a mountain is defined as "a
                            natural elevation of the earth surface rising more or
                            less
                            abruptly from the surrounding level
                            and attaining an altitude which, relatively to the
                            adjacent elevation, is impressive or notable."
                            Whether a landform is called a mountain may depend on local
                            usage. Mount Scott outside Lawton, Oklahoma, USA, is only 251
                            m (823 ft) from its base to its highest point. Whittow's
                            Dictionary of Physical Geography states "Some authorities regard eminences above 600 metres (1,969 ft) as mountains, those below being referred to as hills."
                        </p>
                    </div>
                </div>
                <div className={cmedia.secondBlock}>
                    <p ref={thirthRef} className={`${thirthIsVisible ? cmedia.animateBlock : ' '}`}>There are three main types of mountains: volcanic, fold, and block.
                        All three types are formed from plate tectonics: when portions of the Earth's crust move, crumple, and dive.
                        Compressional forces, isostatic uplift and intrusion of igneous matter forces surface rock upward, creating a
                        landform higher than the surrounding features. The height of the feature makes it either a hill or, if higher and steeper,
                        a mountain. Major mountains tend to occur in long linear arcs, indicating tectonic plate boundaries and activity.</p>
                    <img src={mountainSecond} alt="" ref={fourthRef} className={`${fourthIsVisible ? cmedia.animateBlock : ' '}`} />
                </div>
            </div>
            <div className={`${cmedia.otherInformation} ${fiveIsVisible ? cmedia.animateBlock : ' '}`} ref={fiveRef}>
                <div className={cmedia.thirthBlock}>
                    <img src={wilheim} alt="" />
                    <p> In the United Kingdom and the Republic of Ireland, a mountain is usually defined as
                        any summit at least 2,000 feet (610 m) high, which accords with the official UK government's definition that a mountain,
                        for the purposes of access, is a summit of 2,000 feet (610 m) or higher. In addition, some definitions also include a
                        topographical prominence requirement, such as that the mountain rises 300 metres (984 ft) above the surrounding terrain.
                        At one time the U.S. Board on Geographic Names defined a mountain as being 1,000 feet (305 m) or taller,
                        but has abandoned the definition since the 1970s. Any similar landform lower than this height was considered a hill.
                        However, today, the United States Geological Survey (USGS) concludes that these terms do not have technical definitions in the US.</p>

                </div>
                <div className={cmedia.fourthBlock}>
                    <div className={cmedia.volcanoes}>
                        <h1>Volcanoes</h1>
                        <p>Volcanoes are formed when a plate is pushed below another plate,
                            or at a mid-ocean ridge or hotspot.
                            At a depth of around 100 km, melting occurs in rock above the slab
                            (due to the addition of water), and forms magma that reaches the surface. When the magma reaches
                            the surface, it often builds a volcanic mountain, such as a shield volcano or a stratovolcano.Examples of volcanoes include Mount
                            Fuji in Japan and Mount Pinatubo in the Philippines. The magma does not have to reach the surface in order to create a mountain: magma
                            that solidifies below ground can still form dome mountains, such as Navajo Mountain in the US.</p>
                        <img src={volcanoes} alt="" />
                    </div>
                    <div className={cmedia.otherMountains}>
                        <div className={cmedia.foldmountains}>
                            <h4>Fold mountains</h4>
                            <p>Fold mountains occur when two plates collide: shortening occurs along thrust faults and the crust is
                                overthickened.Since the less dense continental crust "floats" on the denser
                                mantle rocks beneath, the weight of any crustal material forced upward to form hills,
                                plateaus or mountains must be balanced by the buoyancy force of a much greater volume forced downward into the mantle.
                                Thus the continental crust is normally much thicker under mountains, compared to lower lying areas. Rock can fold either
                                symmetrically or asymmetrically. The upfolds are anticlines and the downfolds are synclines: in asymmetric folding there
                                may also be recumbent and overturned folds. The Balkan Mountains and the Jura Mountains are examples of fold mountains.</p>
                            <img src={fold} alt="" />
                        </div>
                        <div className={cmedia.blockmountains}>
                            <h4>Block mountains</h4>
                            <p>Block mountains are caused by faults in the crust: a plane where rocks
                                have moved past each other. When rocks on one side of a fault rise relative to the other,
                                it can form a mountain. The uplifted blocks are block mountains or horsts.
                                The intervening dropped blocks are termed graben: these can be small or form extensive
                                rift valley systems. This form of landscape can be seen in East Africa, the Vosges and Rhine valley, and the
                                Basin and Range Province of Western North America. These areas often occur when the regional
                                stress is extensional and the crust is thinned.</p>
                            <img src={blockmountain} alt="" />
                        </div>
                        <div className={cmedia.eroison}>
                            <h4>Erosion</h4>
                            <p>During and following uplift, mountains are subjected to the agents of erosion
                                (water, wind, ice, and gravity) which gradually wear the uplifted area down.
                                Erosion causes the surface of mountains to be younger than the rocks that form the mountains themselves.
                                160 Glacial processes produce characteristic landforms, such as pyramidal peaks,
                                knife-edge arêtes, and bowl-shaped cirques that can contain lakes. Plateau mountains, such as
                                the Catskills, are formed from the erosion of an uplifted plateau.</p>
                            <img src={erosion} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;