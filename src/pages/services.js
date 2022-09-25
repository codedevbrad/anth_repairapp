import ComponentServiceHeading  from '../_pageComponents/services/page.component.heading';
import ComponentServicesList    from '../_pageComponents/services/page.component.servicesAll.js';
import ComponentPictures        from '../_pageComponents/testimonials/page.component.pictures';
import ComponentServiceFittings from '../_pageComponents/services/page.component.serviceFittings';
import CimponentServiceRepair   from '../_pageComponents/services/page.component.serviceRepair';

export default function Home() {
  return (
    <div className='services'>
      <div className="max-7xl mx-auto lg:max-w-7xl">
          <ComponentServiceHeading />
          <ComponentServicesList    title={ 'Our services' } />
          <ComponentServiceFittings title={ 'Fittings' } />
          <CimponentServiceRepair   title={ 'Repair' } />
          <ComponentPictures/>
      </div>
    </div>
  )
}
