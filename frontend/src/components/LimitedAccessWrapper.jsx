import React from 'react';

const LimitedAccessWrapper = ({ children, isLoggedIn }) => {
  return (
    <div>
      {children}
      {!isLoggedIn && (
        <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          <p className="font-bold">Limited Access</p>
          <p>You are currently using the application with limited access. To unlock all features, please <a href="/login" className="underline">log in</a> or <a href="/register" className="underline">register</a>.</p>
        </div>
      )}
    </div>
  );
};

export default LimitedAccessWrapper;