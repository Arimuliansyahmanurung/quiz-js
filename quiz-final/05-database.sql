create table t_client(

	client_number char(5),
	client_name varchar,
	birth_date date,
	constraint pk_client_clientnumber primary key(client_number)
)

create table t_agent (

	agent_code char(5),
	agent_name varchar,
	agent_office varchar,
	basic_commission int,
	constraint pk_agent_agentcode primary key(agent_code)
)

create table t_policy(

	policy_number int,
	policy_submit_date date,
	premium int,
	commission int,
	client_number char(5),
	agent_code char(5),
	policy_status varchar,
	policy_due_date date,
	constraint pk_policy_policynumber primary key(policy_number),
	constraint fk_policy_client foreign key(client_number) references t_client(client_number),
	constraint fk_policy_agent foreign key(agent_code) references t_agent (agent_code)
)

-- 01
select * from t_policy join t_client on t_policy.client_number = t_client.client_number 
where policy_submit_date > '2018-01-15' and extract(month from t_client.birth_date) = 9
-- 02
SELECT *
FROM t_policy join t_agent on t_policy.agent_code = t_agent.agent_code
WHERE t_policy.policy_status = 'inforce' AND t_agent.agent_office = 'jakarta';
-- 03
UPDATE t_agent
SET "basic_commission" = (t_policy.commission / t_policy.premium) * 100
FROM t_policy
WHERE t_agent.agent_code = t_policy.agent_code;