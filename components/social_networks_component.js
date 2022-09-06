// Social Networks Component

export default function SocialNetworksComponent({social_networks}) {
  // Cabin Events
  const trackSocialNetworkCabin = () => { window.cabin.event("Social Network") }

  return (
    <div className="social-networks flex-h-center">
      <ul className="social-networks-box">
        {social_networks.map((social_network) => (
          <li key={social_network.uid} className="social-networks-item">
            <a href={social_network.url} target="_blank" rel="noreferrer noopener" className="link-s underline" onClick={trackSocialNetworkCabin}>{social_network.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
