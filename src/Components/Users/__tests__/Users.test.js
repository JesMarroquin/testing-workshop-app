import JSON from '../../../JSONResponse.json';
import { getData } from '../Users';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(JSON),
  })
);

describe('getData returns valid data', () => {
  beforeEach(async () => {
    fetch.mockClear();
  });

  it('Resolving promise using then', () => {
    return getData().then((data) => {
      expect(data.info.results).toBeGreaterThan(0);
    });
  });

  it('Using await/async', async () => {
    const data = await getData();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data.info.results).toBeGreaterThan(0);
  });

  it('Using await/async with resolves', async () => {
    await expect(getData()).resolves.toBeDefined();
  });

  it('Using return  with resolves', async () => {
    return expect(getData()).resolves.toBeDefined();
  });
});
