import React, { useEffect } from 'react';

import { QuickStartWrapper } from '../components/QuickStartWrapper';
import { Cards } from '../components/Cards';
import { Stack } from '@mantine/core';
import { BellGradient } from '../../../design-system/icons';
import { Smiley } from '../../../design-system/icons/gradient/Smiley';
import { useSegment } from '../../../hooks/useSegment';
import { FlowTypeEnum, OnBoardingAnalyticsEnum } from '../consts';

export function NotificationCenter() {
  const segment = useSegment();

  useEffect(() => {
    segment.track(OnBoardingAnalyticsEnum.FLOW_SELECTED, { flow: FlowTypeEnum.IN_APP });
  }, []);

  return (
    <QuickStartWrapper secondaryTitle={'How would you like to start?'}>
      <Cards
        cells={[
          {
            description: <InAppDescription />,
            navigateTo: '/quickstart/notification-center/set-up',
          },
          {
            description: <DemoDescription />,
            navigateTo: '/quickstart/notification-center/set-up/demo',
          },
        ]}
      />
    </QuickStartWrapper>
  );
}

export function InAppDescription() {
  return (
    <Stack align="center" spacing="xs">
      <span>I have an existing app!</span>
      <span>Let’s add an In-App Notification Center</span>
      <BellGradient style={{ marginTop: '12px', width: 'inherit', height: '33px' }} />
    </Stack>
  );
}

export function DemoDescription() {
  return (
    <Stack align="center" spacing="xs">
      <span>I want to quickly start</span>
      <span>with a demo app</span> <Smiley style={{ marginTop: '17px', width: 'inherit', height: '26px' }} />
    </Stack>
  );
}
