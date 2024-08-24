import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from '../../ui/Select';
import { CATEGORIES, SOURCES } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getSettings, setSettings } from './settingsSlice';
import { Link } from 'react-router-dom';
import Input from '../../ui/Input';
import { useLocalStorageSettings } from '../../hooks/useLocalStorageSettings';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  margin-bottom: 20px;

  &:hover {
    background-color: #5a6268;
  }
`;

const BackIcon = styled.span`
  display: inline-block;
  margin-right: 8px;

  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Settings = () => {
  const settings = useSelector(getSettings);
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { category, source, author } = settings;
    setCategory(category);
    setSource(source);
    setAuthor(author);
  }, [settings]);

  const handleSave = async () => {
    setLoading(true);
    const updatedSettings = { category, source, author };
    localStorage.setItem('settings', JSON.stringify(updatedSettings));
    dispatch(setSettings(updatedSettings));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <StyledLink to="/">
        <BackButton>
          <BackIcon>
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </BackIcon>
          Back to Home
        </BackButton>
      </StyledLink>
      <Title>Settings</Title>

      <Label htmlFor="category">Category</Label>
      <Select
        id="category"
        value={category}
        onSelectChange={(e) => setCategory(e.target.value)}
        options={CATEGORIES}
        marginBottom="20px"
      />

      <Label htmlFor="source">Source</Label>
      <Select
        id="source"
        value={source}
        onSelectChange={(e) => setSource(e.target.value)}
        options={SOURCES}
        marginBottom="20px"
      />

      <Label htmlFor="author">Author</Label>
      <Input
        type="text"
        id="author"
        placeholder="Enter author's name"
        value={author ?? ''}
        onInputChange={(e) => setAuthor(e.target.value)}
        marginBottom="20px"
      />

      <Button onClick={handleSave}>{loading ? 'Saving...' : 'Save Settings'}</Button>
    </Container>
  );
};

export default Settings;
