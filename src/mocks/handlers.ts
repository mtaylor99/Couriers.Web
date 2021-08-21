// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import {
  mockedDrivers,
  mockedJobs,
  mockedJobStatues,
  mockedScheduleStatues,
} from "./data";

const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/driver`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedDrivers));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/job/statuses`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedJobStatues));
  }),
  rest.get(
    `${process.env.REACT_APP_API_URL}/schedule/statuses`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockedScheduleStatues));
    }
  ),
  rest.get(`${process.env.REACT_APP_API_URL}/job`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedJobs));
  }),
];

export default handlers;
