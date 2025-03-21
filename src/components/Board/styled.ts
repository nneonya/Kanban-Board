import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap; 
  width: 100%;
  max-width: 100%;
`;

export const BoardTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.columnBackground};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.large};
  padding-bottom: ${({ theme }) => theme.spacing.extraSmall};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
