// This function simulates a network request to a login server.
export const login = async(username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'public' && password === '123') {
                resolve({
                    user: { name: 'Public User', role: 'PUBLIC' },
                    token: 'public_user_token',
                });
            } else if (username === 'government' && password === '456') {
                resolve({
                    user: { name: 'Govt. Official', role: 'GOVERNMENT' },
                    token: 'government_user_token',
                });
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000); // 1-second delay to simulate network
    });
};

// This function simulates fetching traffic violation data.
export const getViolationData = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                totalViolations: 47,
                violations: [
                    { type: 'Red Light Violation', count: 22 },
                    { type: 'Overspeeding', count: 15 },
                    { type: 'No Helmet', count: 10 },
                ],
            });
        }, 500);
    });
};