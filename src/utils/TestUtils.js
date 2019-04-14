import _toJson from 'enzyme-to-json';
import jestSnapshotDiff from 'snapshot-diff';

const toJson = data => _toJson(data, { noKey: true });

export const snapshotDiff = (component1, component2) => {
  return jestSnapshotDiff(toJson(component1), toJson(component2));
};
