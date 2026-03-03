export const PLANS = {
    FREE: 'free',
    STANDARD: 'standard',
    PRO: 'pro',
} as const;

export type PlanType = typeof PLANS[keyof typeof PLANS];

export interface PlanLimits {
    maxBooks: number;
    maxSessionsPerMonth: number;
    maxDurationPerSession: number; // in minutes
    hasSessionHistory: boolean;
}

export const PLAN_LIMITS: Record<PlanType, PlanLimits> = {
    [PLANS.FREE]: {
        maxBooks: 9999,
        maxSessionsPerMonth: 99999, /// to test 
        maxDurationPerSession: 5,
        hasSessionHistory: false,
    },
    [PLANS.STANDARD]: {
        maxBooks: 1000,
        maxSessionsPerMonth: 10000,
        maxDurationPerSession: 15,
        hasSessionHistory: true,
    },
    [PLANS.PRO]: {
        maxBooks: 100,
        maxSessionsPerMonth: Infinity,
        maxDurationPerSession: 60,
        hasSessionHistory: true,
    },
};

export const getCurrentBillingPeriodStart = (): Date => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
};
