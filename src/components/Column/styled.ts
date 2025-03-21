import styled from "styled-components";

export const ColumnContainer = styled.div`
  background: ${({ theme }) => theme.colors.columnBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.medium};
  width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const ColumnHeader = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  border-radius: 46px;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: normal;
  padding: ${({ theme }) => theme.spacing.extraSmall};
  gap: ${({ theme }) => theme.spacing.small};
`;

export const TaskCount = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 2px;
`;

export const AddButton = styled.button`
  background: transparent;
  border: none;
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
`;

export const TaskInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const PrioritySelect = styled.select`
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const TaskContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.small};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskDescriptionField = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  resize: none;
  min-height: 80px;
`;

export const AddTaskInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const AddTaskButton = styled.button<{ color: string }>`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};

  span {
    background-color: ${({ color }) => color + "25"};
    color: ${({ color }) => color};
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.extraSmall};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
`;

export const EditInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  margin: 7px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
`;

export const ColorInput = styled.input`
  padding: ${({ theme }) => theme.spacing.extraSmall};
  border-radius: 5px;
  border: none;
  width: 40px;
`;

export const SaveButton = styled.button`
  padding: ${({ theme }) => theme.spacing.extraSmall};
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  transform: scaleX(-1);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
  justify-content: center;
`;
