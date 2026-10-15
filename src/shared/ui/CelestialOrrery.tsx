/**
 * Celestial Orrery
 *
 * A self-contained object illustration built from layered SVG artwork.
 * Orbital rails and the central amethyst move independently through CSS,
 * so the animation remains crisp at every viewport size.
 */
export function CelestialOrrery() {
  return (
    <svg
      className="ma-orrery-svg"
      viewBox="0 0 720 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="orrery-brass" x1="95" y1="135" x2="595" y2="570" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5D58A" />
          <stop offset=".22" stopColor="#9A6A25" />
          <stop offset=".43" stopColor="#F7D994" />
          <stop offset=".67" stopColor="#7D521D" />
          <stop offset=".86" stopColor="#D7A94C" />
          <stop offset="1" stopColor="#63421D" />
        </linearGradient>
        <linearGradient id="orrery-brass-soft" x1="180" y1="110" x2="540" y2="580" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6DFA5" stopOpacity=".95" />
          <stop offset=".5" stopColor="#C9A84C" stopOpacity=".72" />
          <stop offset="1" stopColor="#7A5123" stopOpacity=".35" />
        </linearGradient>
        <radialGradient id="orrery-amethyst" cx="324" cy="278" r="124" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C8A3FF" />
          <stop offset=".24" stopColor="#7850B3" />
          <stop offset=".58" stopColor="#33204D" />
          <stop offset=".82" stopColor="#17111F" />
          <stop offset="1" stopColor="#08070D" />
        </radialGradient>
        <radialGradient id="orrery-core-light" cx="350" cy="337" r="145" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A84C" stopOpacity=".24" />
          <stop offset="1" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orrery-jewel" cx=".25" cy=".22" r=".9">
          <stop stopColor="#F7E4B4" />
          <stop offset=".28" stopColor="#C9A84C" />
          <stop offset=".5" stopColor="#7C5CBF" />
          <stop offset=".76" stopColor="#30203F" />
          <stop offset="1" stopColor="#120D19" />
        </radialGradient>
        <filter id="orrery-bloom" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="orrery-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>

      {/* Ambient aura */}
      <circle cx="360" cy="340" r="240" fill="url(#orrery-core-light)" />
      <ellipse cx="360" cy="626" rx="182" ry="20" fill="#020106" opacity=".55" filter="url(#orrery-shadow)" />

      {/* Suspension and brass pedestal */}
      <path d="M360 72V166" stroke="url(#orrery-brass)" strokeWidth="5" strokeLinecap="round" />
      <path d="M350 91H370M353 108H367M356 126H364" stroke="#F0D49A" strokeOpacity=".76" strokeWidth="1.5" />
      <circle cx="360" cy="74" r="10" fill="url(#orrery-jewel)" stroke="url(#orrery-brass)" strokeWidth="2" />
      <path d="M360 492V570" stroke="url(#orrery-brass)" strokeWidth="10" strokeLinecap="round" />
      <path d="M332 515L360 492L388 515L377 557H343L332 515Z" fill="#19111F" stroke="url(#orrery-brass)" strokeWidth="3" />
      <path d="M344 535L360 516L376 535L370 550H350L344 535Z" fill="#7C5CBF" fillOpacity=".24" stroke="#C9A84C" strokeOpacity=".68" />
      <ellipse cx="360" cy="579" rx="55" ry="12" fill="#100B15" stroke="url(#orrery-brass)" strokeWidth="3" />
      <ellipse cx="360" cy="585" rx="79" ry="14" fill="#17111F" stroke="url(#orrery-brass)" strokeWidth="4" />
      <ellipse cx="360" cy="590" rx="99" ry="17" stroke="#C9A84C" strokeOpacity=".36" strokeWidth="2" />
      <path d="M288 582L301 571M432 582L419 571M326 600L333 593M394 600L387 593" stroke="#E8C77C" strokeOpacity=".72" strokeWidth="2" />
      <path d="M334 573L360 558L386 573" stroke="url(#orrery-brass)" strokeWidth="3" />

      {/* Main outer armature: animated separately from the instrument body */}
      <g className="ma-orrery-ring ma-orrery-ring--outer">
        <ellipse cx="360" cy="337" rx="244" ry="111" transform="rotate(-28 360 337)" stroke="url(#orrery-brass)" strokeWidth="8" />
        <ellipse cx="360" cy="337" rx="244" ry="111" transform="rotate(-28 360 337)" stroke="#F4D790" strokeOpacity=".55" strokeWidth="1.4" />
        <path d="M121 456L146 447M168 480L187 469M218 496L234 484M483 180L498 168M526 204L540 196M570 238L584 230" stroke="#E4BE69" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="447" r="11" fill="#16101C" stroke="url(#orrery-brass)" strokeWidth="4" />
        <circle cx="570" cy="229" r="11" fill="#16101C" stroke="url(#orrery-brass)" strokeWidth="4" />
        <circle cx="150" cy="447" r="4" fill="#C9A84C" />
        <circle cx="570" cy="229" r="4" fill="#C9A84C" />
      </g>

      {/* Fine secondary orbit with two gemstone satellites */}
      <g className="ma-orrery-ring ma-orrery-ring--inner">
        <ellipse cx="360" cy="337" rx="196" ry="70" transform="rotate(36 360 337)" stroke="url(#orrery-brass-soft)" strokeWidth="4" />
        <ellipse cx="360" cy="337" rx="196" ry="70" transform="rotate(36 360 337)" stroke="#F5DFA5" strokeOpacity=".34" strokeWidth="1" />
        <circle cx="548" cy="430" r="22" fill="#100B17" stroke="url(#orrery-brass)" strokeWidth="4" />
        <circle cx="548" cy="430" r="15" fill="url(#orrery-jewel)" />
        <circle cx="188" cy="245" r="17" fill="#100B17" stroke="url(#orrery-brass)" strokeWidth="4" />
        <circle cx="188" cy="245" r="11" fill="url(#orrery-jewel)" />
      </g>

      {/* Vertical measuring ring */}
      <g className="ma-orrery-ring ma-orrery-ring--vertical">
        <ellipse cx="360" cy="337" rx="91" ry="245" stroke="url(#orrery-brass-soft)" strokeWidth="4" />
        <ellipse cx="360" cy="337" rx="78" ry="231" stroke="#C9A84C" strokeOpacity=".28" strokeWidth="1.5" />
        <path d="M360 89V126M360 548V585" stroke="url(#orrery-brass)" strokeWidth="5" />
        <circle cx="360" cy="132" r="9" fill="url(#orrery-jewel)" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="360" cy="543" r="9" fill="url(#orrery-jewel)" stroke="#C9A84C" strokeWidth="2" />
      </g>

      {/* Central amethyst orb */}
      <circle className="ma-orrery-core-glow" cx="360" cy="337" r="126" fill="#C9A84C" opacity=".16" filter="url(#orrery-bloom)" />
      <circle cx="360" cy="337" r="108" fill="#0D0B14" stroke="url(#orrery-brass)" strokeWidth="5" />
      <circle cx="360" cy="337" r="96" fill="url(#orrery-amethyst)" stroke="#C9A84C" strokeOpacity=".7" strokeWidth="2" />
      <path d="M299 294C318 260 360 243 395 266C425 286 432 318 414 338C394 362 360 363 346 397C337 418 312 412 298 387C281 357 281 325 299 294Z" fill="#A782E3" fillOpacity=".16" />
      <path d="M301 289C325 270 340 275 352 291C367 310 390 306 405 294" stroke="#D7BFFF" strokeOpacity=".66" strokeWidth="3" strokeLinecap="round" />
      <path d="M314 377C342 352 369 367 381 388C389 402 403 404 414 392" stroke="#8D63CA" strokeOpacity=".8" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="333" cy="295" rx="23" ry="12" transform="rotate(-30 333 295)" fill="#F4E7FF" fillOpacity=".35" />
      <circle cx="360" cy="337" r="25" fill="url(#orrery-jewel)" stroke="url(#orrery-brass)" strokeWidth="3" />
      <circle cx="352" cy="328" r="6" fill="#FFF1C5" opacity=".8" />

      {/* Tiny brass markers make it feel like a crafted instrument */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const x1 = 360 + Math.cos(angle) * 116
        const y1 = 337 + Math.sin(angle) * 116
        const x2 = 360 + Math.cos(angle) * 127
        const y2 = 337 + Math.sin(angle) * 127
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D7B86A"
            strokeOpacity={i % 3 === 0 ? 0.82 : 0.34}
            strokeWidth={i % 3 === 0 ? 2 : 1}
          />
        )
      })}

      {/* Suspended crystal */}
      <g className="ma-orrery-pendant">
        <path d="M485 112V158" stroke="url(#orrery-brass)" strokeWidth="2" />
        <circle cx="485" cy="164" r="6" fill="url(#orrery-jewel)" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M485 171L503 198L485 229L467 198L485 171Z" fill="#7C5CBF" fillOpacity=".28" stroke="url(#orrery-brass)" strokeWidth="2.5" />
        <path d="M485 173V224M469 198H501M485 173L501 198L485 224L469 198Z" stroke="#E9D6FF" strokeOpacity=".58" strokeWidth="1" />
        <circle cx="485" cy="198" r="4" fill="#F0ECE4" />
      </g>
    </svg>
  )
}
