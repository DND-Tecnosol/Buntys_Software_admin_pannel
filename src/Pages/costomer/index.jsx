import React from 'react';
import CustomerSegment from './CustomerSegment';
import ServiceSegment from './ServiceSegment';
import UpcomingSegment from './UpcomingSegment';

const CostomerSection = () => {
  return (
    <>
      <div class="col-12 col-sm-12">
        <div class="card-tabs">
          <div class="card-header p-0 pt-1 border-bottom-0">
            <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Costomer Segment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Service Segment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-three-settings-tab" data-toggle="pill" href="#custom-tabs-three-settings" role="tab" aria-controls="custom-tabs-three-settings" aria-selected="false">Upcoming Wishes</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content" id="custom-tabs-three-tabContent">
              <div class="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                <CustomerSegment />
              </div>
              <div class="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                <ServiceSegment />
              </div>
              <div class="tab-pane fade" id="custom-tabs-three-settings" role="tabpanel" aria-labelledby="custom-tabs-three-settings-tab">
                <UpcomingSegment />
              </div>

            </div>
          </div>
          {/* <!-- /.card --> */}
        </div>
      </div>
    </>
  );
}

export default CostomerSection;
