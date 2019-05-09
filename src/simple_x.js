import React from 'react';
import anime from 'animejs';

export class SimpleX extends React.Component {
    componentDidMount() {
        const timeline = anime.timeline({
            loop: true,
            endDelay: 1000,
        });

        // Up-Down
        timeline.add({
            targets: '#water',
            translateY: [480, 0],
            duration: 10000,
            easing: 'easeInOutCubic',
            direction: 'alternate',
        }, 0);

        let keyframes = [];
        const frame1 = {
            d: "M0 640L640 640L640 0C530.79 -27.67 424.12 -27.67 320 0C215.88 27.67 109.21 27.67 0 0L0 640Z",
        };
        const frame2 = {
            d: "M0 640L640 640L640 0C536.19 20.08 429.52 20.08 320 0C210.48 -20.08 103.81 -20.08 0 0L0 640Z",
        };
        for (var i = 5; i > 0; i--) {
            keyframes = keyframes.concat(frame1);
            keyframes = keyframes.concat(frame2);
        }
        // Waves
        timeline.add({
            targets: '#water',
            keyframes,
            duration: 10000,
            easing: 'easeInOutCubic',
            direction: 'alternate',
            loop: 3,
        }, 0);

        anime(timeline);
    }

    render() {
        const sparxX = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640">
              <defs>
                <path d="M0 640L640 640L640 0C536.19 20.08 429.52 20.08 320 0C210.48 -20.08 103.81 -20.08 0 0L0 640Z" id="water"/>
                <path d="M0 0L640 0L640 640L0 640L0 640L0 0ZM21.43 598.96L225.35 598.32L320.59 440.27L416.43 598.96L618.57 598.96L432.65 300.3L593.46 41.04L400.21 41.04L320.59 172.23L241.28 41.04L37.72 41.04L213.18 300.3L213.18 300.3L21.43 598.96Z" id="sparxX"/>
              </defs>
              <g>
                <g>
                  <g>
                    <use xlinkHref="#water" opacity="1" fill="#00b7e0" fill-opacity="1"/>
                    <g>
                      <use xlinkHref="#water" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"/>
                    </g>
                  </g>
                  <g>
                    <use xlinkHref="#sparxX" opacity="1" fill="#000000" fill-opacity="1"/>
                  </g>
                </g>
              </g>
            </svg>
        )

        return sparxX;
    }
};
