const PEventIdGenerator = (prefix: "ATC_" | "P_") => {
  const event_id = prefix + new Date().getTime();
  return event_id;
};

export default PEventIdGenerator;
