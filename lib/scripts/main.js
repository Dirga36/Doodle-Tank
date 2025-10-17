import * as challengeTests from "./ChallengeTests";
import * as commandTests from "./CommandTests";
import * as mobBehaviorTests from "./MobBehaviorTests";
// set
import * as HealthParameterTests from "./HealthParameterTests";

challengeTests.registerChallengeTests();
commandTests.registerCommandTests();
mobBehaviorTests.registerMobBehaviorTests();
// set
HealthParameterTests.registerHealthParameterTests();
