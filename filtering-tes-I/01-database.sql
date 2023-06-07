-- a
select * from t_policy join t_client on t_policy.client_number = t_client.client_number 
where policy_submit_date > '2018-01-15' and extract(month from t_client.birth_date) = 9

-- b
SELECT *
FROM t_policy join t_agent on t_policy.agent_code = t_agent.agent_code
WHERE t_policy.policy_status = 'inforce' AND t_agent.agent_office = 'jakarta';

-- c
UPDATE t_agent
SET "basic_commission" = (t_policy.commission / t_policy.premium) * 100
FROM t_policy
WHERE t_agent.agent_code = t_policy.agent_code;

-- d

-- e