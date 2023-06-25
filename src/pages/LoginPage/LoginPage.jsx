import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores';
import queryString from 'query-string';

import { shallow } from 'zustand/shallow';
import { useForm } from 'react-hook-form';
import { login } from 'services/auth';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, setToken } = useAuthStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      setToken: state.setToken,
    }),
    shallow,
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  });
  const { isLoading, mutate, isError } = useMutation(login, {
    onSuccess: (data) => {
      const access_token = data?.data.access_token;
      const { redirect } = queryString.parse(location.search);
      if (access_token) setToken({ token: access_token });
      navigate(redirect || '/');
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          type='text'
          {...register('username')}
          style={{
            border: '1px solid',
          }}
        />
        {errors.username && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          {...register('password')}
          style={{
            border: '1px solid',
          }}
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <button
        type='submit'
        style={{
          border: '1px solid',
        }}
      >
        Submit
      </button>
    </form>
  );
}

LoginPage.defaultProps = {};
