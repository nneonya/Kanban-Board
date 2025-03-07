import styled from "styled-components";
import { FaTimes, FaEdit } from "react-icons/fa";

export const TaskContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.small};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const PriorityBadge = styled.span<{ priority?: string }>`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: ${({ theme }) => theme.borderRadius.large};

  padding: 4px 8px;
  color: ${({ priority, theme }) =>
  priority === "High" ? theme.colors.priorityHigh :
  priority === "Medium" ? theme.colors.priorityMedium :
  theme.colors.priorityLow};
background-color: ${({ priority, theme }) =>
  priority === "High" ? theme.colors.priorityHighTransparent :
  priority === "Medium" ? theme.colors.priorityMediumTransparent :
  theme.colors.priorityLowTransparent};
align-self: flex-start;
`;

export const TaskTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TaskDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  text-align: left;
  display: inline-block;
  min-width: 0;
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;

export const EditIcon = styled(FaEdit)`
  cursor: pointer;
  margin-right: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DeleteIcon = styled(FaTimes)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const EditableText = styled.span`
  display: inline-block;
  min-width: 0;
  outline: none;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;
export const SaveButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;
