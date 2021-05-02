function byLabel(label) {
  return (issue) => {
    const targets = issue.labels.reduce((accumulator, label) => {
      const target = label.name.toLowerCase();

      accumulator.add(target);

      return accumulator;
    }, new Set());

    const query = label.toLowerCase();

    return targets.has(query);
  };
}

function byTitle(title) {
  return (issue) => {
    const target = issue.title.toLowerCase();
    const query = title.toLowerCase();

    return target.includes(query);
  };
}

export default function filterIssues(issues, { label, query }) {
  let filteredIssues = issues;

  if (label) {
    filteredIssues = filteredIssues.filter(byLabel(label));
  }

  if (query) {
    filteredIssues = filteredIssues.filter(byTitle(query));
  }

  return filteredIssues;
}
