import React from 'react';

const config = {
  overdue: {
    label: "Overdue",
    className: "bg-red-100 text-red-600",
  },
  "almost due": {
    label: "Almost Due",
    className: "bg-amber-100 text-amber-600",
  },
  'on-track': {
    label: "On Track",
    className: "bg-green-100 text-green-700",
  },
};

const StatusBadge = ({status}) => {
    const cfg = config[status] || config['on-track'];
    return (
        <span className={`inline-block font-semibold rounded-full text-[10px] px-2.5 py-0.5 ${cfg.className}`}>
            {cfg.label}
        </span>
    );
};

export default StatusBadge;