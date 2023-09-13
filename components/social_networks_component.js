// Social Networks Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import Image from "next/image"

export default function SocialNetworksComponent({social_networks}) {
  // Track the event in Cabin
  const trackSocialNetworkCabin = () => { window.cabin.event("Social Network") }

  return (
    <div className="social-networks flex-h-center">
      <ul className="social-networks-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-item">
            <a href={social_network.url} target="_blank" rel="me noreferrer noopener" className="link-s underline" onClick={trackSocialNetworkCabin}>
              <Image
                src={social_network.image}
                width={social_network.width}
                height={social_network.height}
                quality={100}
                priority="true"
                // sizes="(max-width: 959px) 100vw, (min-width: 960px) 100vw, 100vw"
                alt={`Tony de Faria - Social Network - ${social_network.name} - ${social_network.uid}`}
                title="Tony de Faria"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
