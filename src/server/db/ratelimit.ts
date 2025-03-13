import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  analytics: true,
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

// Useage
// Use a constant string to limit all requests with a single ratelimit
// Or use a userID, apiKey or ip address for individual limits.
// const identifier = "api";
// const { success } = await ratelimit.limit(identifier);

// if (!success) {
//   return "Unable to process at this time";
// }

// doExpensiveCalculation();
// return "Here you go!";
