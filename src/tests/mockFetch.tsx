export default async function mockFetch(url: string) {
  switch (url) {
    case "http://localhost/job/statuses": {
      return {
        ok: true,
        status: 200,
        json: async () => [
          {
            jobStatusId: 1,
            description: "Created",
          },
          {
            jobStatusId: 2,
            description: "Scheduled",
          },
          {
            jobStatusId: 3,
            description: "Completed",
          },
        ],
      };
    }
    case "http://localhost/schedule/statuses": {
      return {
        ok: true,
        status: 200,
        json: async () => [
          {
            jobStatusId: 1,
            description: "Draft",
          },
          {
            jobStatusId: 2,
            description: "Ready",
          },
          {
            jobStatusId: 3,
            description: "On Route",
          },
          {
            jobStatusId: 4,
            description: "Completed",
          },
        ],
      };
    }
    case "http://localhost/driver": {
      return {
        ok: true,
        status: 200,
        json: async () => [
          {
            driverId: 1,
            firstName: "Joe",
            lastName: "Bloggs",
          },
          {
            driverId: 2,
            firstName: "Matt",
            lastName: "Smith",
          },
        ],
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
