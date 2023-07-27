import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores';
import queryString from 'query-string';

import { shallow } from 'zustand/shallow';
import { useForm } from 'react-hook-form';
import { login } from 'services/auth';
import { Center, Button, Flex, VStack, Input } from '@chakra-ui/react';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
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
      const accessToken = data?.data.accessToken;
      const { redirect } = queryString.parse(location.search);
      if (accessToken) setToken({ token: accessToken });
      navigate(redirect || '/');
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <Center h='100vh'>

      <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <Input
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
          <Input
            type='password'
            {...register('password')}
            style={{
              border: '1px solid',
            }}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <Button
          type='submit'
          style={{
            border: '1px solid',
          }}
        >
          Submit
        </Button>
      </VStack>
    </Center>

  );
}

LoginPage.defaultProps = {};
