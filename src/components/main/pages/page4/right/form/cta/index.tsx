// App imports
import { SVGArrow } from '../../../../utils/arrow';

// Context imports
import { useUserMessage } from '../../../../../context/users/message';

export const CTA = () => {
  const { isLoading } = useUserMessage();

  return (
    <button 
      className="pages-primary-button" 
      disabled={isLoading}
      type='submit' 
    >
      {isLoading ? 'Sending...' : 'Send Message'}
      <SVGArrow 
        fill="rgba(255, 255, 255, 1)" 
        width="15" 
        strokeWidth="1.6"
      />
    </button>
  )
}

CTA.displayName="CTA";