import React from 'react';

export interface ServiceNotAvailableProps {
  setServiceIsAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ServiceNotAvailable = (
  props: ServiceNotAvailableProps,
): JSX.Element => {
  const { setServiceIsAvailable } = props;
  return (
    <div className="service-not-available">
      <p className="service-not-available__text1">
        This service is not available in beta version.
      </p>
      <p className="service-not-available__text2">
        Official release will be online soon.
      </p>
      <button
        className="service-not-available__button button"
        onClick={(): void => setServiceIsAvailable(true)}
      >
        Back to homepage
      </button>
    </div>
  );
};
