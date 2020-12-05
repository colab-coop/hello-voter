import { normalizeTripler } from './AddTripler';
import { TRIPLERS_UNCONFIRMED } from '../../stories/Triplers.mocks';

test('normalizes triplers', async () => {
  expect(normalizeTripler(TRIPLERS_UNCONFIRMED[0])).toEqual({
    id: "1",
    name: "Lauren R (Age: 30-39)",
    address: "200 Address Ln Denver, CO"
  })
});
