import { normalizeTripler } from './AddTripler';
import { TRIPLERS_UNCONFIRMED } from '../../stories/Triplers.mocks';

test('normalizes triplers', async () => {
  expect(normalizeTripler(TRIPLERS_UNCONFIRMED[0])).toEqual({
    id: "1",
    name: "Lauren R (30-39)",
    address: "Address lane Denver, CO"
  })
});
