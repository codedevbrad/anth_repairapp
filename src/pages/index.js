import ComponentHero from '../_pageComponents/home/page.component.hero';
import ComponentTeam from '../_pageComponents/home/page.component.team';
import ComponentServicesListSample from '../_pageComponents/services//page.component.servicesSample'; 
import ComponentHomeFAQS from '../_pageComponents/home/page.component.faqs';

export default function Home() {
  return (
    <div className='homepage'>

      <ComponentHero />

      <ComponentHomeFAQS />

      <div className="max-7xl mx-auto lg:max-w-7xl">
          <ComponentServicesListSample />
          <ComponentTeam /> 
      </div>

    </div>
  )
}
