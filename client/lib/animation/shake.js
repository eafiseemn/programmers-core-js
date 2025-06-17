/* -------------------------------------------------------------------------- */
/*                          shake target horizontally                         */
/* -------------------------------------------------------------------------- */

export default function shake(target) {
    gsap.fromTo(target, {
        // from
        x:-10,
    }, {
        // to
        duration: 0.1,
        x: 0,
        repeat: 5,
        yoyo: true,
    })
}
