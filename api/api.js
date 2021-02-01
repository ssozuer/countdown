import moment from 'moment';

export const formatDateTime = (dateString) => {
  const parsed = moment(new Date(dateString));
  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('H A on D MMM YYYY');
};

export const formatDate = (dateString) => {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
};

export const getCountDownParts = (eventDate) => {
  const duration = moment.duration(
    moment(new Date(eventDate)).diff(new Date()),
  );
  return {
    // eslint-disable-next-line radix
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
};
